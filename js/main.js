(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.fixed-top .container').addClass('shadow-sm').css('max-width', '100%');
        } else {
            $('.fixed-top .container').removeClass('shadow-sm').css('max-width', '85%');
        }
    });
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Chatbox functionality
document.getElementById('chatbox-button').onclick = function() {
    const chatWindow = document.getElementById('chatbox-window');
    chatWindow.style.display = (chatWindow.style.display === 'block') ? 'none' : 'block';
  };
  
  document.getElementById('close-chatbox').onclick = function() {
    const chatWindow = document.getElementById('chatbox-window');
    chatWindow.style.display = 'none';
  };
  
  function sendMessage() {
    const input = document.getElementById('chat-input');
    if (input.value.trim()) {
      const newMessage = document.createElement('p');
      newMessage.textContent = "You: " + input.value;
      document.querySelector('.chatbox-body').appendChild(newMessage);
      input.value = '';
    }
  }
  
  // Make chatbox draggable
  dragElement(document.getElementById("chatbox"));
  
  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-button")) {
      document.getElementById(elmnt.id + "-button").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  
  // progress bar
function move() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const progressBar = document.getElementById("progress-bar");

  if (email && password) {
      // Start the progress bar animation
      let width = 0;
      const interval = setInterval(() => {
          if (width >= 100) {
              clearInterval(interval);
              alert("Login successful!");
          } else {
              width++;
              progressBar.style.width = width + "%";
          }
      }, 20); // Adjust speed as necessary
  } else {
      alert("Please fill in both email and password!");
  }
}

})(jQuery);

