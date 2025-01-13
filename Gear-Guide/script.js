// Function to open the modal with dynamic content
function openModal(title, description, link) {
  // Clear previous modal content (title, description, and Buy Now button)
  document.getElementById('modal-title').innerText = '';
  document.getElementById('modal-description').innerText = '';
  document.getElementById('modal-link-container').innerHTML = '';  // Clear the Buy Now button

  // Set new modal title and description
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-description').innerText = description;

  // Create and append the new "Buy Now" button
  const buyLink = document.createElement('a');
  buyLink.href = link;
  buyLink.className = 'buy-now-link';
  buyLink.innerText = 'Buy Now';
  
  // Append the "Buy Now" button to the modal
  document.getElementById('modal-link-container').appendChild(buyLink);

  // Display the modal
  document.getElementById('modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

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
    document.onmousemove = null;
  }
}

