(function () {
    angular.module('app').component('ngCropperTemplate', ngCropperTemplate());
    function ngCropperTemplate() {
        return {
            templateUrl: '/AngularTemplates/ngCropper',
            controller: CropperUI,
            controllerAs:'Ctrl',
            bindings: {
                width: '@',
                height: '@',
                resultImg: '=',
                imgUrl: '@?',
                isDone: '=?'
            }
        };
    }
    CropperUI.$inject = ['$log', '$scope', 'Cropper', '$document'];
    function CropperUI($log,$scope, Cropper, $document) {
        /* jshint validthis:true */
        var vm = this;
        //directive parameters
        vm.resultImg;
        vm.imgUrl;
        vm.width;
        vm.height;
        vm.isDone;
        //var
        var finalSize = { width: vm.width, height: vm.height };
        var ratio = finalSize.width / finalSize.height;
        var PrevImg = "";
            
        vm.file;
        vm.data;
        vm.options = {};
        vm.DataUrl = "";

        $scope.cropper = {};
        $scope.cropperProxy = 'cropper.first';
        $scope.showEvent = 'show';
        $scope.hideEvent = 'hide';

        //ui variable
        vm.HasImg = false;
        vm.EditMode = false;
        vm.EditButtonText = "編輯";
        
        //functions
        vm.Preview = preview;
        vm.OnFile = onFile;
        vm.Zoom = zoom;
        vm.ZoomTo = zoomTo;
        vm.EditButton = editButton;
        vm.LoadButton = LoadButton;
        vm.Reset = Reset;
        vm.Error = Error;

        activate();

        /////////////////
        function activate() {
            vm.options = {
                viewMode: 1,
                maximize: true,
                aspectRatio: ratio,
                crop: function (dataNew) {
                    vm.data = dataNew;
                },
                zoomOnWheel: false,
                dragMode: 'move'
            };

            //load image on server
            if (getServerImgUrl()) {
                vm.HasImg = true;
                LoadImageFromUrl(getServerImgUrl());
            }
            //watch EditMode
            $scope.$watch('Ctrl.EditMode', function (newValue) {
                vm.isDone = !newValue;
            });
        }
        function getServerImgUrl() {
            return vm.imgUrl;
            //return 'http://i.imgur.com/r2dqxw2.jpg';
        }
        function getResultData() {
            return vm.resultImg;
        }
        function setResultData(data) {
            vm.resultImg = data;
        }

        function LoadImageFromUrl(url) {
            var blob = null;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
            xhr.onload = function () {
                //xhr.response is now a blob object
                //then set file and dataurl
                Cropper.encode((vm.file = xhr.response))
                    .then(function (dataUrl) {
                        vm.DataUrl = dataUrl;
                        PrevImg = dataUrl;
                    });
            }
            xhr.send();
        }
        function onFile(blob) {
            if (!blob) {
                return;
            }
            vm.file = blob;
            Cropper.encode(vm.file).then(function (dataUrl) {
                vm.DataUrl = dataUrl;
                vm.HasImg = true;
                EditEnable();
            });
        };

        function preview() {
            if (!vm.file || !vm.data) return;
            Cropper.crop(vm.file, vm.data)
                    .then(function (blob) {
                        return Cropper.scale(blob, { width: finalSize.width });
                    })
                .then(Cropper.encode)
                .then(function (dataUrl) {
                    setResultData(dataUrl);
                    PrevImg = dataUrl;
                    vm.DataUrl = dataUrl;
                    EditDisable();
                });
        };
        function zoom(scale) {
            if (!$scope.cropper.first) return;
            $scope.cropper.first('zoom', scale);
        }
        function zoomTo(scale) {
            if (!$scope.cropper.first) return;
            $scope.cropper.first('zoomTo', scale);
        }
        function showCropper() { $scope.$broadcast($scope.showEvent); }
        function hideCropper() { $scope.$broadcast($scope.hideEvent); }

        //ui functions
        function editButton() {
            vm.EditMode = !vm.EditMode;
            if (vm.EditMode) {
                EditEnable();
            } else {
                EditDisable();
            }
        }
        function EditEnable() {
            vm.EditMode = true;
            //reload image
            Cropper.encode(vm.file).then(function (dataUrl) {
                vm.DataUrl = dataUrl;
                hideCropper();
                showCropper();
            });
            vm.EditButtonText = "放棄編輯";

            EditEnable.isReady = true;
        }
        function EditDisable() {
            vm.EditMode = false;
            hideCropper();
            vm.EditButtonText = "編輯";
            //if there's no PrevImg,it has no image?
            if (!PrevImg) {
                vm.HasImg = false;
            }
            vm.DataUrl = PrevImg;

        }
        function LoadButton() {
            $document.find('#FileLoader').trigger('click');
        }
        //NOT TESTED,OLD CODE
        function Reset() {
            EditDisable();
            //reload server image if there is server image
            if (vm.resolveData.EditActivity.ImageUrl) {
                LoadImageFromUrl(vm.resolveData.EditActivity.ImageUrl);
            } else {
                vm.DataUrl = "";
            }
            vm.resolveData.ImgData = "";
            PrevImg = "";
            ($scope.preview || ($scope.preview = {})).dataUrl = "";
        }
        function Error() {
            alert('您上傳的圖片格式無效!');
            EditDisable();
            //get data from previmg
            if (PrevImg) {
                vm.HasImg = true;
                vm.file = Cropper.decode(getResultData());
            } else {
                vm.HasImg = false;
                vm.file = "";
                vm.DataUrl = "";
            }
        }
    }
})();