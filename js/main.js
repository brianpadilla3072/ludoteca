$(document).ready( function (){
let menu = `
            <nav class="navbar navbar-dark bg-primary">
                        <div class="conteiner">
                        <a href="index.php" class="navbar-brand"> Ludoteca</a> 
                        </div>
                        <div class="input-group col-md-4 col-sm-5 rounded">
                            <input type="search" name="search" id="search" class="form-control rounded " placeholder="Buscar.." />
                                <button type="" class="btn-warning"> Buscar</button>

                            </div>
                            <form action="index.php" method="POST">
                            <button class="btn btn-warning" name="update">Cargar</button>
            </nav>
                    
`;  //  ``  `` `` 

    $('#menu').html(menu);
});