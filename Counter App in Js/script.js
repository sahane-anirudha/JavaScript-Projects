let count = 0;
    const countDisplay = document.getElementById("count");

    function increment() {
      count++;
      countDisplay.textContent = count;
    }

    function decrement() {
      count--;
      countDisplay.textContent = count;
    }

    function reset() {
      count = 0;
      countDisplay.textContent = count;
    }