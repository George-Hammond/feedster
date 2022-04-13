$(document).ready(() => {
    //Menu Appear and Disappear.
  $('.menu').on('mouseenter', ()=>{
    $('.nav-menu').show()
  }),
  $('.nav-menu').on('mouseleave', ()=>{
    $('.nav-menu').hide();
  });
  
  //Add Hover Functionality to +1 Button
  $('.btn').on('mouseenter', event=>{
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', event=>{
    $(event.currentTarget).removeClass('btn-hover')
  }),
  
  //Limit User's Post.
  $('.postText').on('keyup', event =>{
    $('.postText').focus();
    const post = $(event.currentTarget).val();
    const remaining = 140 - post.length;
    if(remaining <= 0){
      $('.wordcount').addClass('red');
    }else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining);
  })
  }); 
  