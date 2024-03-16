import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery if not already imported in your project

function Cursor() {
  useEffect(() => {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function(e) {
      const hoverAnim = this.querySelector('.hover-anim');
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;
      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    $("a, .cursor-pointer").hover(
      function() {
        $(".cursor").addClass("cursor-active");
      },
      function() {
        $(".cursor").removeClass("cursor-active");
      }
    );

    // Cleanup event listeners when component unmounts
    return () => {
      link.forEach(b => b.removeEventListener('mousemove', animateit));
      link.forEach(b => b.removeEventListener('mouseleave', animateit));
      window.removeEventListener('mousemove', editCursor);
    };
  }, []);

  return (
    <div className="cursor"></div>
  );
}

export default Cursor;
