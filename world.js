function start(){
    $('#lookup').click(function(){
        $('#result').html('');
        var country = $('#country').val();
        var all_countries = $('#all').is(':checked');
        
        if (all_countries == true){
            $.get('world.php?all=true', function(data){
                $('#result').html(data);
            });
        else{
            $.get('world.php?country=' + country, function(data){
                $('#result').html(data);
                });
            }
        }
    }
    )
}
$ (document).ready(start);