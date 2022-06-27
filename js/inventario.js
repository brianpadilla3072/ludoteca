$(document).ready( function (){ //buscador
    console.log('jquery is working');
    $('#search').keyup( //vamos a capturar las teclas del imput id search

        function(){
            let search = $('#search').val();// guardamos eu una variable el valor del campo
             console.log(search); 
             $.ajax({
                url:'includes/serch.php', //rutade pedido
                type: 'POST', //TIPO DE METODO
                data:{search}, // valora a enviar;
                success: 
                    function(response){
                        const consultas = JSON.parse(response); // convertimos el string que viene de la base de datos en JSON
                        let template='';
                        template+=`<div class="row p-4 bg-white rounded border m-1">`;
                        consultas.forEach(consultas => { // SEPARA LAS CONSULTAS 
                            template += `
                            <!-- FOTO --> 
                            <div class="img col-md-3 "> 
                       
                                <img class="img-fluid img-rounded" src="" alt= "" />
                            </div>
                       
                       
                            <!-- DETALLES -->
                            <div class="cont pr-5 col-md-8 ">
                       
                                <div>
                                    <!-- TITULO -->
                                    <h1 class="align-top">${consultas.NAME}</h1> 
                                    <!-- DEscripcion -->
                                    <P>${consultas.DESCRIPTION} </P>
                       
                                </div>   
                            </div>
                            <div class=" pr-0 col-md-1 ">
                                <h1>${consultas.GAMBLERS}</h1>
                                <H1>${consultas.TIME}</H1>
                            </div>
                          ` });
                          template += `</div>`;

                        $('#inventario').html(template);
                    }
             });
        }
    );
});