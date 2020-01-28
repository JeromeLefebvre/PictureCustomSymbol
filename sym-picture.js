/***************************************************************************
   Copyright 2016 OSIsoft, LLC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 ***************************************************************************/

(function (PV) {
    function symbolVis() { }
    PV.deriveVisualizationFromBase(symbolVis);

	symbolVis.prototype.init = function (scope) {
        this.onDataUpdate = dataUpdate;
        this.onConfigChange = configChange;
        scope.config.baseUrl = 'https://openweathermap.org/img/wn/';
        scope.value = '10d@2x.png';

        function dataUpdate(data) {
            if(data) {
                console.log(data);
                scope.value = scope.config.baseUrl + data.Value;
            }
            console.log()
        }

        function configChange(newConfig, oldConfig) {
            console.log(scope.config.baseUrl);

        }
    };

    var definition = {
        typeName: 'picture',
        datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        iconUrl: "/Scripts/app/editor/symbols/ext/Icons/camera.png",
       
        getDefaultConfig: function() {
    	    return {
    	        DataShape: 'Value',
    	        Height: 150,
                Width: 150,
                TextColor: 'rgb(255,255,255)',
                ShowLabel: true,
                ShowTime: false
            };
        },
        configOptions: function() {
            return [{
                title: 'Format Symbol',
                mode: 'format'
            }];
        }
    };

    PV.symbolCatalog.register(definition);
})(window.PIVisualization);