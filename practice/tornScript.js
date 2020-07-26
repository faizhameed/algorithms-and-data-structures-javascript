function clickThatItem(n) {
  return function (classItem) {
    const click = setInterval(() => {
      console.log("running");
      if (document.getElementsByClassName(classItem).length > 0) {
        document.getElementsByClassName(classItem)[0].click();
        n--;
      }
      if (n <= 0) {
        clearInterval(click);
      }
    }, 100);
  };
}

let clickIt = clickThatItem(10);

clickIt("next-act");
