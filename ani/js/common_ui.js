// $(function(){ 
    // 실행할 기능을 정의해주세요. 
    console.log('찍어줘');

    const wonCall = {
        inNumber : $('input[type="number"]'),
        init : function () {
            console.log(wonCall.inNumber.length);
            wonCall.inNumber.each(function(){
                // $(this).val('원');
                $(this).on('keydown', function() {
                    var thisVal = $(this).val();
                    console.log(thisVal);
                });
            });
        }
    }
// });
