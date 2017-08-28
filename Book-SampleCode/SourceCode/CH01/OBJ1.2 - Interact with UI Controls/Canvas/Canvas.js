        window.onload = function () {
            var drawingSurface = document.getElementById("drawingSurface");
            var ctxt = drawingSurface.getContext("2d");

            ctxt.beginPath();
            ctxt.arc(150,100,75,0,2 * Math.PI,false);
            ctxt.lineWidth = 25;
            ctxt.strokeStyle = '#0f0';
            ctxt.stroke();

            ctxt.beginPath();
            ctxt.arc(450, 100, 75, 1.5 * Math.PI, 2 * Math.PI, false);
            ctxt.lineWidth = 25;
            ctxt.strokeStyle = 'blue';
            ctxt.stroke();

            ctxt.beginPath();
            ctxt.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
            ctxt.lineWidth = 25;
            ctxt.strokeStyle = '#0ff';
            ctxt.stroke();

            ctxt.beginPath();
            ctxt.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
            ctxt.lineWidth = 25;
            ctxt.strokeStyle = '#f00';
            ctxt.stroke();

        }