
import React, { useEffect, useRef } from 'react';
import './background.css'; // Import your stylesheet

const Background = () => {
  const backgroundRef = useRef();

  useEffect(() => {
    const background = backgroundRef.current;
    const bgCtx = background.getContext("2d");
    const width = window.innerWidth;
    let height = document.body.offsetHeight;

    height = (height < 400) ? 400 : height;

    background.width = width;
    background.height = height;

    function Terrain(options) {
      options = options || {};
      this.terrain = document.createElement("canvas");
      this.terCtx = this.terrain.getContext("2d");
      this.scrollDelay = options.scrollDelay || 90;
      this.lastScroll = new Date().getTime();

      this.terrain.width = width;
      this.terrain.height = height;
      this.fillStyle = options.fillStyle || "#191D4C";
      this.mHeight = options.mHeight || height;

      this.points = [];

      var displacement = options.displacement || 140,
        power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

      this.points[0] = this.mHeight;
      this.points[power] = this.points[0];

      for (var i = 1; i < power; i *= 2) {
        for (var j = (power / i) / 2; j < power; j += power / i) {
          this.points[j] = ((this.points[j - (power / i) / 2] + this.points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
        }
        displacement *= 0.6;
      }

      document.body.appendChild(this.terrain);
    }

    Terrain.prototype.update = function () {
  this.terCtx.clearRect(0, 0, width, height);
  this.terCtx.fillStyle = this.fillStyle;

  if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
    this.lastScroll = new Date().getTime();
    this.points.unshift(this.points.pop()); // Use unshift/pop to shift terrain downwards
  }

  this.terCtx.beginPath();
  for (var i = 0; i <= width; i++) {
    if (i === 0) {
      this.terCtx.moveTo(0, height); // Start from the bottom
    } else if (this.points[i] !== undefined) {
      this.terCtx.lineTo(i, this.points[i]);
    }
  }

  this.terCtx.lineTo(width, height);
  this.terCtx.lineTo(0, height);
  this.terCtx.lineTo(0, this.points[0]);

  this.terCtx.fill();
  this.terCtx.globalCompositeOperation = 'destination-over'; // Draw terrain behind other elements
}

    bgCtx.fillStyle = '#05004c';
    bgCtx.fillRect(0, 0, width, height);

    function Star(options) {
      this.size = Math.random() * 2;
      this.speed = Math.random() * .05;
      this.x = options.x;
      this.y = options.y;
    }

    Star.prototype.reset = function () {
      this.size = Math.random() * 2;
      this.speed = Math.random() * .05;
      this.x = width;
      this.y = Math.random() * height;
    }

    Star.prototype.update = function () {
      this.x -= this.speed;
      if (this.x < 0) {
        this.reset();
      } else {
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    function ShootingStar() {
      this.reset();
    }

    ShootingStar.prototype.reset = function () {
      this.x = Math.random() * width;
      this.y = 0;
      this.len = (Math.random() * 80) + 10;
      this.speed = (Math.random() * 10) + 6;
      this.size = (Math.random() * 1) + 0.1;
      this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
      this.active = false;
    }

    ShootingStar.prototype.update = function () {
      if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= height) {
          this.reset();
        } else {
          bgCtx.lineWidth = this.size;
          bgCtx.beginPath();
          bgCtx.moveTo(this.x, this.y);
          bgCtx.lineTo(this.x + this.len, this.y - this.len);
          bgCtx.stroke();
        }
      } else {
        if (this.waitTime < new Date().getTime()) {
          this.active = true;
        }
      }
    }

    var entities = [];

    for (var i = 0; i < height; i++) {
      entities.push(new Star({
        x: Math.random() * width,
        y: Math.random() * height
      }));
    }

    entities.push(new ShootingStar());
    entities.push(new ShootingStar());
    entities.push(new Terrain({ mHeight: (height / 2) - 120 }));
    entities.push(new Terrain({ displacement: 120, scrollDelay: 50, fillStyle: "rgb(17,20,40)", mHeight: (height / 2) - 60 }));
    entities.push(new Terrain({ displacement: 100, scrollDelay: 20, fillStyle: "rgb(10,10,5)", mHeight: height - 100 }));

    function animate() {
      bgCtx.fillStyle = '#110E19';
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = '#ffffff';
      bgCtx.strokeStyle = '#ffffff';

      var entLen = entities.length;

      while (entLen--) {
        entities[entLen].update();
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <canvas
      ref={backgroundRef}
      className="background-canvas"
    />
  );
};

export default Background;
