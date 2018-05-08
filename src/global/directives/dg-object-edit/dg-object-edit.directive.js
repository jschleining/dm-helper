var app = angular.module('dmHelperApp');

/**
 * IntRadio - Used for creating standardized check box throughout the app.
 *
 * @param {object=} parent The parent object. Can be null.
 * @param {Array=} group The array the object belongs to.
 * @param {object=} object The object being edited.
 * @param {Array=} editTypes String array containing types of edits allowed. Turns on and off sections.
 *
 * @example
  <li ng-repeat="obj in vm.editObject.arrayName">
    <object-edit object="obj" group="vm.editObject.arrayName" parent="vm.editObject"
        editTypes="['save', 'delete']" on-save="vm.save(vm.editObject)"></object-edit>
  </li>
 */
app.directive('dgObjectEdit', ['Utilities', function(Utilities) {
  return {
    restrict: 'E',
    templateUrl: 'global/directives/dg-object-edit/dg-object-edit.view.html',
    scope: {
      parent: '=', // the parent object
      group: '=', // array of objects this object exists in
      object: '=', // the specific object to be edited
      editTypes: '=', // type of edits allowed on this object
      defaultText: '@', // placeholder for text fields
      toggleMessage: '@', // text to display for a toggle
      hintMessage: '@', // text to display in a hint
      hideFrame: '=', // hide the frame that appears around the box
      onChangeAllowed: '&',
      onDelete: '&',
      onSave: '&',
      onUpdateWeight: '&',
      onAddWeight: '&',
      onRemoveWeight: '&'
    },
    link: function(scope, elem, attr) {
      scope.defaultText = attr.defaultText || 'Enter Text Here...';
      scope.hintMessage = attr.hintMessage || 'Hint Missing!';
      scope.checkForEditTypes = function(allowedTypes) {
        var editTypesExist = false;
        if (scope.editTypes && scope.editTypes.length > 0 && allowedTypes && allowedTypes.length > 0) {
          for (var type = 0; type < allowedTypes.length; type++) {
            if (scope.editTypes.indexOf(allowedTypes[type]) > -1) {
              editTypesExist = true;
              break;
            }
          }
        }
        return editTypesExist;
      };
      scope.checkForCustom = function() {
        var isCustom = false;
        if (!scope.object.id || (scope.object.id && scope.object.id.indexOf('cust') > -1)) {
          isCustom = true;
        }
        return isCustom;
      };
      scope.checkForInputText = function(text) {
        var textExists = true;
        if (text === '') {
          textExists = false;
        }
        return textExists;
      };
      scope.checkForInBounds = function(value, modifier, params) {
        var inBounds = true;
        var checks = [0, 0];
        if (params.type === 'min' && value + modifier < params.value) {
          checks[0] = 1;
        }
        if (params.type === 'max' && value + modifier > params.value) {
          checks[1] = 1;
        }
        if (checks.indexOf(1) > -1) {
          inBounds = false;
        }
        return inBounds;
      };
      scope.checkForLastActive = function() {
        var isLastActive = false;
        var matchingObjects = Utilities.findMatches(scope.group, 'isAllowed', false, 'exact');
        var disabledItems = matchingObjects.length;
        if (scope.object.isAllowed && disabledItems === scope.group.length - 1) {
          isLastActive = true;
        }
        return isLastActive;
      }
    }
  };
}]);