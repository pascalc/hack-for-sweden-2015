/* global _, window */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource, settings) {
  $scope.state = {
    searchTerm: "",
    countyCode: 1,
    data: [],
    showModal: true
  };

  // Dummy data
  $scope.jobData = {"platsannons":{"annons":{"annonsid":"2666299","platsannonsUrl":"http://www.arbetsformedlingen.se/4.1799db4911df80d2fa9800024.html?id=2666299","annonsrubrik":"kökschef","annonstext":"hej och välkommen till Cinderella I och II. vi driver 2 båtar som trafikerar Stockholms skärgård dagligen.\nvi söker nu säsongs personal till 2015.\ndu ska ha erfarenhet i yrket sen tidigare.\nbåtarna har cafeteria på entredäck som serverar dagens lunch, sallader och smörgåsar.\npå övredäck ligger våra nyrenoverade restauranger med meny med influenser från Skandinavien samt fullständiga rättigheter.\nbåtarna avgår från strandvägen i centrala Stockholm.\nvi kör två avgångar om dagen, en på morgonen och en på kvällen 7 dagar i veckan.\nombord jobbar ca 12 personer \nvälkommen att ringa för övriga frågor om tjänsterna.\nPatrik lindblad 0707308307","yrkesbenamning":"Köksmästare","yrkesid":222,"publiceraddatum":"2015-03-23T14:39:26+01:00","antal_platser":"1","kommunnamn":"Stockholm","antalplatserVisa":1},"villkor":{"varaktighet":"Tillsvidare","arbetstid":"Heltid","arbetstidvaraktighet":"","lonetyp":"Fast månads- vecko- eller timlön","loneform":""},"ansokan":{"referens":"","epostadress":"patrik.cinderellabatarna@gmail.com","sista_ansokningsdag":"2015-04-23T00:00:00+02:00","ovrigt_om_ansokan":"säsongen börjar i mitten på april och slutar mitten av september\r\neventuellt helårs"},"arbetsplats":{"arbetsplatsnamn":"Tema Shipping AB/ Cinderellabåtarna","postnummer":"18 31","postadress":"Kronängsv 1","postort":"Vaxholm","postland":"Sverige","land":"Sverige","besoksadress":"Strandvägen kajplats 14","besoksort":"Stockholm","telefonnummer":"070 7940547","faxnummer":"08-6628747","epostadress":"temashipping@telia.com","hemsida":""}}};

  $scope.counties = settings.countyCodes;
  
  $scope.search = function() {
    $scope.state.data = [];
    window.scrollTo(0,0);

    $scope.state.searched = true;
    $rootScope.showLoading(true);
    JobResource.getList($scope.state.searchTerm, $scope.state.countyCode).then(function(response) {
      $rootScope.showLoading(false);
      $scope.state.data = response.data.matchningslista.matchningdata;
    });
  };
  
  window.scope = $scope;
});
