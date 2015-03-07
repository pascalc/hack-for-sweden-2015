#!env python

from fabric.api import env
import os
import sys
import subprocess

env.use_ssh_config = True

env.hosts = [
  "pspace.se"
]

settings = {
  "pspace.se": {
    "web_home": "/srv/hack4sweden",
    "user": "root",
    "profile": None
  }
}

def getSetting(setting):
  return settings[env.host_string][setting]

def local(cmd, silent=False):
  if not silent:
    print "[localhost] %s" % cmd
  try:
    return subprocess.check_output(cmd, shell=True)
  except:
    print "Error running command"
    sys.exit(1)

def sudo(cmd):
  return run("sudo %s" % cmd)

def runas(user, cmd):
  return run("sudo -u %s %s" % (user, cmd))

def run(cmd):
  print "[%s] %s" % (env.host_string, cmd)
  return local("ssh -qt %s@%s %s" % (getSetting('user'), env.host_string, cmd), True)

def put(filepath):
  subprocess.call("scp %s %s@%s:%s" % (filepath, getSetting('user'), env.host_string, filepath), shell=True)


def build():
  profile = getSetting("profile")
  if profile:
    local("NODE_ENV=%s grunt build" % profile)
  else:
    local("grunt build")
  os.chdir("build")
  local("tar cf /tmp/%s-build.zip *" % env.host_string)
  os.chdir("..")

def upload():
  put("/tmp/%s-build.zip" % env.host_string)

def move():
  run("rm -rf %s/*" % getSetting("web_home"))
  run("tar -C %s -xf /tmp/%s-build.zip" % (getSetting("web_home"), env.host_string))
  run("chmod -R g+w %s/*" % (getSetting("web_home")))

def clean():
  local("rm /tmp/%s-build.zip" % env.host_string)
  run("rm /tmp/%s-build.zip" % env.host_string)

def deploy():
  build()
  upload()
  move()
  clean()

