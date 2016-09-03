(function () {
    angular
      .module('validation')
      .config(['$validationProvider', function ($validationProvider) {
          var expression = {
              required: function (value) {
                  return !!value;
              },
              url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
              email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
              number: /^\d+$/,
              minlength: function (value, scope, element, attrs, param) {
                  if (!value) return true;
                  return value.length >= param;
              },
              maxlength: function (value, scope, element, attrs, param) {
                  if (!value) return true;
                  return value.length <= param;
              },
              date: function (value, scope, element, attrs, param) {
                  return Date.parse(value);
              }

          };

          var defaultMsg = {
              required: {
                  error: '此欄位必填',
                  success: 'It\'s Required'
              },
              url: {
                  error: 'This should be Url',
                  success: 'It\'s Url'
              },
              email: {
                  error: 'Email格式不符，請再次檢查',
                  success: 'It\'s Email'
              },
              number: {
                  error: '必須輸入 數字',
                  success: 'It\'s Number'
              },
              minlength: {
                  error: '內容太少，請充實內容。',
                  success: 'Long enough!'
              },
              maxlength: {
                  error: '內容太多，請精簡內容',
                  success: 'Short enough!'
              },
              date: {
                  error: '日期格式錯誤',
                  success: 'It\'s Date'
              }
          };
          $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
      }]);
}).call(this);
