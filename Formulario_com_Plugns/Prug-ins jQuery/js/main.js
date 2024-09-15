// funções do carroceul
$(document).ready(function() {
    $('#carrousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    // formulario
    
    // adicionar um padrão de escrita permitido
    $('#telefone').mask('(00) 00000-0000')
    // --------------------------------------

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            produtoInteresse: {
                required: false
            },
            menssagem: {
                required: true
            }
        },
            
        // mudar mensagens
        messages: {
            nome: 'Por favor Insira seu nome!'
        },
        // ------------------

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-produtos button').click(function() {
        const destino = $('#contato')

        // "this" ultilizado para encontrar um texto ou elemento especifico dentro do local
        const produtosselected = $(this).parent().find('h3').text();

        $('#produto-interesse').val(produtosselected);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})