describe('simple tests', function(){
    var scope, ctrl;
    var somePhotos = ['1', '2', '3'];

    beforeEach(module('galleryApp'))

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller('galleryCtrl', {
            $scope: scope,
            Photo: {
                list: function(){
                    return somePhotos
                },
                listTopRated: function(){

                }
            }
        })
    }))

    it('should return list of photos from photoService', function(){
        //should(scope.list).toBe(somePhotos);
    })
})