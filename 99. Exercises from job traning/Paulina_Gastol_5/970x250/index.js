(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,500);


(lib.fond = function() {
	this.initialize(img.fond);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,500);


(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,300,300), null);


(lib.txt5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBA93D").s().p("AgUAXIgDgMIgJAAIABgHIAGAAIAAgEIAAgDIgHAAIABgIIAHAAQAEgTAPgIQAIgFAMgBQALAAAHAGIgCALQgHgHgJAAQgKABgGAEQgEADgDAFIgEAKIAnAAIgCAIIgmAAIAAADIAAAEIAlAAIgCAHIgiAAQADAOAJAFQAGAFAIAAQALgBAGgFIAAAMQgIADgIAAQgaAAgJgVg");
	this.shape.setTransform(53.275,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBA93D").s().p("AgSAjQgJgLAAgYQAAgOADgKQAEgJAFgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgHgJgAgKgcQgGAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgEAGg");
	this.shape_1.setTransform(46.75,72.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBA93D").s().p("AgSAjQgJgLAAgYQAAgOADgKQAEgJAFgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgMAAgGgJgAgKgcQgGAIAAAUQAAAVAFAHQAFAHAGAAQAIAAAEgHQAFgHAAgVQAAgUgFgHQgEgHgIAAQgHAAgDAGg");
	this.shape_2.setTransform(40.1,72.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBA93D").s().p("AgTAjQgIgLAAgYQAAgOADgKQADgJAGgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgIgJgAgKgcQgGAIAAAUQAAAVAFAHQAFAHAGAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgHAAgDAGg");
	this.shape_3.setTransform(33.45,72.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBA93D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_4.setTransform(28.5,76.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBA93D").s().p("AgTAlQgHgHgCgLIAMgBQABAIAEAEQAFAEAGABQAHgBAFgFQAFgGAAgKQAAgIgFgFQgFgFgHAAQgFAAgFACQgEACgBADIgKgBIAIgrIApAAIAAAKIghAAIgFAXQAIgFAIgBQALAAAIAJQAHAGABAMQAAAMgIAIQgIALgNAAQgMAAgHgGg");
	this.shape_5.setTransform(23.5,72.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBA93D").s().p("AgUAkQgIgJAAgPQAAgPAIgJQAIgIAMAAQANAAAIAIQAIAJAAAPIgBACIgtAAQABAKAFAGQAFAFAHAAQAGAAAEgDQAEgDACgHIALACQgCAJgHAGQgHAFgLAAQgNAAgIgIgAgLgGQgFAFAAAGIAhAAQAAgGgEgEQgFgHgIAAQgGAAgFAGgAgFgaIAHgRIAOAAIgNARg");
	this.shape_6.setTransform(13.475,72.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBA93D").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_7.setTransform(8.525,72.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBA93D").s().p("AgWAbQgGgEABgIQAAgFACgEQACgDADgDIAHgDIAKgBQAMgBAFgDIAAgCQAAgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAFgGADQgEABgGAAQgLABgFgGgAgBAEQgHAAgDACQgCABgCACQgCADABADQAAAEADADQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgPAEg");
	this.shape_8.setTransform(3.45,73.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBA93D").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_9.setTransform(89.375,62.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBA93D").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_10.setTransform(84.425,61.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EBA93D").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_11.setTransform(79.375,62.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBA93D").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_12.setTransform(72.725,62.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBA93D").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_13.setTransform(68.075,61.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBA93D").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_14.setTransform(65.375,61.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBA93D").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_15.setTransform(61.275,62.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBA93D").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_16.setTransform(49.75,62.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EBA93D").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_17.setTransform(41.425,62.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EBA93D").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHABQAHgBAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJABQgLgBgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_18.setTransform(34.575,63.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBA93D").s().p("AgWAbQgGgFABgHQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgDgDQgEgDgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQABADACAEIgLAAIgDgHQgFAFgGACQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgCABgCACQgCACABAEQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_19.setTransform(28.1,62.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EBA93D").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_20.setTransform(23.175,61.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EBA93D").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_21.setTransform(18.125,62.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EBA93D").s().p("AgWAbQgGgFABgHQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgDgDQgEgDgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQABADACAEIgLAAIgDgHQgFAFgGACQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgCABgCACQgCACABAEQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_22.setTransform(11.45,62.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EBA93D").s().p("AgFArIghhVIAMAAIAWA9IAEAPIAFgPIAXg9IALAAIghBVg");
	this.shape_23.setTransform(4.125,61.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBA93D").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_24.setTransform(108.725,51);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBA93D").s().p("AgNArIABgHIAFAAQAGAAABgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgCgBIgGgBIACgHQgIgCgFgGQgIgIAAgPQAAgKADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAANQAAALAFAGQAEAFAHABQAGgBAEgDQAFgEABgHIAKABQgCALgHAFQgGAGgKABIABgFIgHAAIgBAEIAGABIABAAIgBACQAFABADACQACADAAACQAAAFgEADQgEAEgIgBIgIAAgAACAWIAAAAgAACAWgAABAWIgGgBIABgEIAHAAIgBAFIgBAAg");
	this.shape_25.setTransform(102.575,52.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EBA93D").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_26.setTransform(97.875,50.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBA93D").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgDgDQgFgEgHAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgCgHQgFAEgFADQgFACgHAAQgJAAgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAADQAAADAEAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgRAEg");
	this.shape_27.setTransform(92.05,51);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EBA93D").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAVA8IACAMIAFgNIAVg7IAPAAIAABVg");
	this.shape_28.setTransform(83.75,49.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBA93D").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_29.setTransform(72.075,51);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EBA93D").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgGAAgEAGg");
	this.shape_30.setTransform(65.2,49.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBA93D").s().p("AgbArQgBgEACgDQACgGAFgFQAFgHAIgHQANgLAFgGQAGgHAAgFQgBgHgEgEQgEgEgIgBQgGABgFAEQgEAEgBAJIgLgBQACgMAHgHQAHgGALAAQANAAAHAHQAHAGAAALQABAFgDAFQgCAEgFAFQgFAGgLAKIgLAKIgFAGIApAAIAAAKg");
	this.shape_31.setTransform(55.3,49.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBA93D").s().p("AgbArQgBgEACgDQACgGAFgFQAFgHAIgHQANgLAFgGQAGgHgBgFQAAgHgEgEQgEgEgIgBQgGABgFAEQgFAEAAAJIgLgBQABgMAIgHQAHgGALAAQANAAAHAHQAHAGAAALQABAFgDAFQgCAEgFAFQgFAGgLAKIgLAKIgEAGIAoAAIAAAKg");
	this.shape_32.setTransform(48.65,49.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBA93D").s().p("AgWAbQgFgFAAgHQAAgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgEADQgFACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_33.setTransform(38.75,51);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EBA93D").s().p("AgTAlQgIgHgBgLIAMgBQABAIAEAFQAFADAGAAQAGAAAGgFQAFgGAAgKQAAgJgFgEQgFgFgHAAQgFAAgFACQgDADgCACIgKgBIAHgrIAqAAIAAAKIghAAIgEAXQAHgGAIABQALgBAIAJQAHAGABANQgBALgGAIQgJALgNAAQgMAAgHgGg");
	this.shape_34.setTransform(28.8,49.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EBA93D").s().p("AAFArIAAhCQgDADgGAEIgLAGIAAgLQAJgEAGgGQAGgGADgFIAHAAIAABVg");
	this.shape_35.setTransform(21.675,49.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBA93D").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_36.setTransform(12.125,51);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EBA93D").s().p("AgjArIAAhVIAeAAQAJAAAFABQAHACAGAFQAGAFAEAJQADAJAAALQABAKgDAHQgDAIgDAEQgEAFgEADIgKAEQgGACgGAAgAgYAhIATAAQAIAAAFgCIAHgEQAEgEADgHQACgHAAgJQgBgNgEgIQgFgGgGgDQgEgCgKAAIgSAAg");
	this.shape_37.setTransform(4.65,49.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#222220").s().p("AglCuIAAlbIBLAAIAAFbg");
	this.shape_38.setTransform(93.6655,16.5172,0.2603,0.2603);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#222220").s().p("AglCuIAAlbIBLAAIAAFbg");
	this.shape_39.setTransform(90.0337,16.5172,0.2603,0.2603);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#222220").s().p("AhdBwQgWgTgBgiQABgVAIgQQAJgOATgLQASgKAhgGIBEgKIAAgDQAAgXgJgHQgJgIgWAAQgSAAgJAFQgHAEgGANIhDgSQAJgeAbgRQAegSAvABQAkgBAaAKQAYAKANAUQAMAVgBAeIAACkIg6AAIgHgVQgSAPgWAGQgRAIgZgBQgnABgXgUgAgEAfQgVADgJAGQgHAFAAAKQAAAJAGAFQAHAFANAAQANAAANgFQAOgGAPgKIAAgdg");
	this.shape_40.setTransform(84.4558,17.7994,0.2603,0.2603);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#222220").s().p("AhKCAIAAj5IA6AAIAHAZQALgJAMgHQAOgHAOgEQARgEARAAIgGBIQgNAAgPADQgPADgIAFQgLAHgHAHIAACeg");
	this.shape_41.setTransform(76.1638,17.7082,0.2603,0.2603);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#222220").s().p("AhDByQgegRgTgeQgTgfAAgkQAAgmATgdQARgdAggRQAegRAlAAQAmAAAeARQAeAQAUAeQASAfAAAlQAAAjgSAfQgUAegeARQgeASgmgBQglABgegSgAgeg1QgNAHgHAOQgIAPAAARQAAAQAIAQQAHAPANAHQAOAIAQAAQARAAANgIQAOgHAHgPQAIgOAAgRQAAgRgIgPQgHgOgOgIQgNgIgRAAQgQAAgOAIg");
	this.shape_42.setTransform(69.4469,17.7994,0.2603,0.2603);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#222220").s().p("Ag7CxIAAi5IgiAAIAAg/IAiAAIAAgJQAAgtAZgZQAagaAwAAQAMAAARACIAZAGIgMA/IgRgEIgTgCQgRAAgGAIQgHAJAAAQIAAAHIBAAAIAAA/IhAAAIAAC5g");
	this.shape_43.setTransform(63.2376,16.426,0.2603,0.2603);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#222220").s().p("AAqCAIAAiYQABgRgJgJQgIgJgWAAQgOAAgLAGQgLAFgJAKIAACmIhNAAIAAj5IA7AAIAHAZQAQgNATgKQATgIAaAAQAZAAATAIQAVAHANAVQANAVAAAjIAACjg");
	this.shape_44.setTransform(53.9824,17.7082,0.2603,0.2603);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#222220").s().p("Ag7CkQgegPgSgfQgRgeAAgnQAAgoARgcQASgeAdgQQAegQAhAAQA5AAAgAgQAhAfAAA8IAAAfIitAAQABAIAEAFQAHAQAPAHQAOAIARAAQAXAAAOgJQAOgJAKgLIA0AkQgRAZgdAQQgcAQgoAAQglAAgfgRgAgYgMQgNAIgHAPIgDAHIBlAAQgDgRgJgHQgOgOgXAAQgRAAgMAIgAAYhuQgLgMAAgRQAAgRALgMQAMgMARAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgRAAgMgMgAhPhuQgMgLAAgSQAAgRAMgMQALgMASAAQAQAAAMAMQAMANAAAQQAAARgMAMQgMAMgQAAQgSAAgLgMg");
	this.shape_45.setTransform(46.3738,16.5172,0.2603,0.2603);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#222220").s().p("AhDByQgfgRgTgeQgSgeAAglQAAglASgeQATgdAfgRQAegRAlAAQAnAAAdARQAgARARAdQATAeAAAmQAAAlgTAdQgRAeggARQgdASgngBQglABgegSgAgdg1QgOAHgHAOQgIAPAAARQAAARAIAPQAHAPAOAHQAMAIARAAQASAAAMgIQANgHAIgPQAIgOAAgRQAAgRgIgPQgHgOgOgIQgMgIgSAAQgRAAgMAIg");
	this.shape_46.setTransform(38.7977,17.7994,0.2603,0.2603);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#222220").s().p("AhLCAIAAj5IA7AAIAHAZQAKgJANgHQAOgHAOgEQARgEARAAIgGBIQgOAAgOADQgOADgJAFQgKAHgIAHIAACeg");
	this.shape_47.setTransform(32.8423,17.7082,0.2603,0.2603);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#222220").s().p("AgmCNQgVgUAAgmIAAhxIgoAAIAAg/IAoAAIAAhEIBMAAIAABEIBJAAIAAA/IhJAAIAABfQAAAQAGAIQAFAHAOAAQAHAAALgDQAIgCAJgFIAXA4QgQALgWAFQgTAEgSAAQgqAAgVgVg");
	this.shape_48.setTransform(27.1407,16.9988,0.2603,0.2603);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#222220").s().p("AglC0IAAj4IBLAAIAAD4gAgfhlQgOgOAAgTQAAgSAOgOQANgNASAAQATAAANANQAOAOAAASQAAATgOAOQgOANgSAAQgSAAgNgNg");
	this.shape_49.setTransform(22.4871,16.3479,0.2603,0.2603);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#222220").s().p("Ag9ByQgdgQgRgfQgRgeAAglQAAgkARgfQASgeAdgQQAdgRAkAAQAxAAAcATQAcAUAPAiIhDAdQgHgOgMgKQgLgJgVAAQgQAAgMAIQgLAGgIAPQgHAPAAARQAAAQAIAPQAGAOAOAJQAMAIAQAAQAUAAANgJQAOgJAJgOIA7AlQgRAegeARQgfASgngBQgmABgegSg");
	this.shape_50.setTransform(17.2151,17.7994,0.2603,0.2603);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E1AC54").s().p("APEKQIAAhkIHiAAQBeAABChQQBChRAAhwIAAtGMgwuAAAQhdAAhCBQQhCBRAABwIAANGIK7AAIAABkIsfAAIAAuqQAAiaBfhtQBghuCGAAMAySAAAIAAOqQAACahfBtQhgBuiHAAg");
	this.shape_51.setTransform(54.6505,17.2827,0.2604,0.2604);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E1AC54").s().p("AhSDNQgjgMgogbIAng+QAZATAdALQAcALAlAAQAiAAATgLQATgLAAgZQAAgTgNgMQgNgNgfgKIg9gVQgegLgYgPQgXgQgLgWQgMgYAAggQAAglAUgaQATgaAhgPQAigOAnAAQAeAAAYAEQAYAFAVAJQAUAJAXAPIgmA/QgUgPgbgJQgagJgfAAQgaAAgRALQgQAKAAAYQAAAUALAKQAMAKAZAJIA7AVQAlANAWAOQAYAOAOAXQANAYAAAiQAAA8gpAfQgpAfhMAAQgwAAgigLg");
	this.shape_52.setTransform(70.5679,32.9005,0.2604,0.2604);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E1AC54").s().p("AgnDRIAAihIiVkAIBVAAIBoC6IBni6IBVAAIiUEDIAACeg");
	this.shape_53.setTransform(60.8743,32.9071,0.2604,0.2604);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1AC54").s().p("AB4DRIglhoIipAAIglBoIhSAAICamhIBnAAICbGhgAg9AkIB4AAIg7iqg");
	this.shape_54.setTransform(51.2327,32.9071,0.2604,0.2604);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E1AC54").s().p("Ai8DRIAAmhIChAAQAuAAAnARQAnAPAdAeQAeAdAQAlQARAlAAArQAAAqgRAmQgQAngdAcQgdAegnAPQgoARguAAgAhqCHIBPAAQAdgBAYgKQAYgKASgTQARgTAKgYQAJgZABgbQgBgZgJgZQgLgZgQgSQgSgTgYgLQgYgLgdAAIhPAAg");
	this.shape_55.setTransform(40.2956,32.9071,0.2604,0.2604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt5, new cjs.Rectangle(-1.8,0.3,119.8,81.10000000000001), null);


(lib.txt4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAUIgDAAIgBABIgCAAIAAgPIACAAQABAHADADQAEADADAAQADAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgDgCgCIgIgGQgGgCgCgCQgCgDAAgEQAAgFAEgDQADgDAFAAIAFABIADAAIABAAIABgBIACAAIAAAOIgCAAQgCgHgCgCQgDgDgDAAQgDAAgCACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAFAEIAGADQAJADAAAHQAAAGgFADQgEADgFAAIgHgBg");
	this.shape.setTransform(73.075,8.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAQQgFgGAAgJQAAgKAFgFQAFgGAIAAQAGAAAFAEQAEAFAAAHIgbAAQAAAIAFAFQAEAFAFAAQADAAAEgCQACgCACgFIACABQgBAGgEAFQgFAEgGAAQgHAAgFgFgAgGgOQgEADAAAFIARAAIAAgGIgDgEQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgDAAgDADg");
	this.shape_1.setTransform(69.3,8.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAXQgFgGABgHQAAgGADgEQACgGAFgDQAEgCAEAAQAJAAAFAHQAGAFAAAHQgBAGgCAFQgDAGgEADQgFACgFAAQgJAAgFgHgAgFgHQgDABgBAEQgCACAAAGQAAAJAEAGQAEAGAFAAQADAAAEgDQACgEAAgIQAAgLgFgFQgDgEgDAAIgFABgAgCgVIgEgDIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgBAEIgBAAQAAgGACgDQADgCADAAIADAAIAFADQAEADACAAIACgBIABgFIACAAIgBAGQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgFABQgDAAgEgDg");
	this.shape_2.setTransform(65,7.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAdIAAgCIACAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgDIgBgDIgCgBIgBAAIADgGIAAAAIADAAIABgBIgDAAIgBABQgGAAgFgFQgFgGAAgJQAAgJAFgGQAHgGAHAAQAFAAAEADQAEADAAADIgBADIgDABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgDADQgEAEAAAHQAAAIAEAEQAEAGAFAAQADAAAEgDQACgCACgFIACABQgBAHgFAEQgEADgEABIgCACQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAEgDACQgDACgDAAIgEAAgAAAANIABgBIADAAIgBABIgDAAgAAAANg");
	this.shape_3.setTransform(60.75,8.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAfIAAgBIADgBIACgCIABgFIAAgPIgBgIIgBgCIgCAAIgCAAIgBgBIALgFIACAAIAAAfIABAFIABACIAEABIAAABgAgCgXQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_4.setTransform(57.525,6.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAHAgIAAgGIgGAFIgEABQgHAAgFgGQgFgFAAgJQAAgIAFgHQAGgHAJAAQAEAAADAEIAAgIIAAgIIgBgCIgCgBIgDABIgBgCIANgFIACAAIAAAuIAAAIIABADIABAAIADgBIABACIgMAFgAgIgEQgEAEAAAJQAAAJAEAEQAEAFAEAAQADAAAEgEIAAgVQAAgCgBgCQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgDgBQgEAAgDADg");
	this.shape_5.setTransform(54.15,6.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACAVIAAgCIABAAIAEgBIABgCIAAgEIAAgQIgBgIQgBgCgDAAQgFAAgFAFIAAAVIABAFIABACIAEAAIAAACIgUAAIAAgCIABAAQABAAABAAQAAAAABAAQABAAAAgBQAAAAABAAQABgCAAgEIAAgOIAAgJIgBgCIgDgBIgDABIAAgCIAMgFIACAAIAAAJQAHgJAFAAQAEAAACACQACACACADIABAIIAAARIAAAFIACACIAEAAIAAACg");
	this.shape_6.setTransform(49.5,7.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAOQgFgGAAgHQAAgFAEgFQACgGAEgDQAFgCAEAAQAJAAAFAHQAFAGABAHQAAAFgDAFQgDAGgEADQgFACgFAAQgIAAgGgHgAgFgQQgDABgBAEQgBADgBAGQABAIADAGQADAGAGAAQADAAADgDQADgEAAgIQAAgKgFgGQgCgEgFAAIgEABg");
	this.shape_7.setTransform(45,8.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAQQgFgGAAgKQAAgIAFgGQAGgGAIAAQAFAAAEADQAEADAAADIgBADIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgDADQgEAEAAAHQAAAHAEAFQADAGAGAAQAEAAADgDQACgCACgGIACABQgBAIgGAEQgEAEgGAAQgGAAgFgFg");
	this.shape_8.setTransform(40.75,8.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAQQgFgGAAgJQAAgKAFgFQAFgGAIAAQAGAAAFAEQAEAFAAAHIgbAAQAAAIAFAFQAEAFAFAAQAEAAADgCQADgCABgFIACABQgBAGgEAFQgFAEgHAAQgGAAgFgFgAgGgOQgEADAAAFIARAAIAAgGIgDgEQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgDAAgDADg");
	this.shape_9.setTransform(34.55,8.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBAaIgDgDIAAgGIAAgaIgHAAIAAgCIAFgEIAEgFIACgGIABAAIAAANIAKAAIAAAEIgKAAIAAAYQAAAFACAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACgBIACgCIACAAQgBAEgDACQgDACgDAAIgDgBg");
	this.shape_10.setTransform(31.3,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAfIAAgBIADgBIACgCIABgFIAAgjIgBgJIgBgCIgBAAIgDAAIgBgBIALgFIACAAIAAA0IAAAFIACACIAEABIAAABg");
	this.shape_11.setTransform(28.775,6.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAJAVIAAgJIgJAIIgFABQgCAAgDgCQgCgCgCgDIgBgJIAAgRIAAgEIgCgBIgEgBIAAgCIANAAIAAAaQAAAGACACQACACAEAAIACgCIAHgEIAAgWQgBgDgBgCQgBgBgEAAIAAgCIAOAAIAAAYIAAAIIABADIABAAIAEgBIABACIgNAFg");
	this.shape_12.setTransform(25.25,8.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAUIgDAAIgBABIgCAAIAAgPIACAAQABAHADADQAEADADAAQADAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgDgCgCIgIgGQgGgCgCgCQgCgDAAgEQAAgFAEgDQADgDAFAAIAFABIADAAIABAAIABgBIACAAIAAAOIgCAAQgCgHgCgCQgDgDgDAAQgDAAgCACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAFAEIAGADQAJADAAAHQAAAGgFADQgEADgFAAIgHgBg");
	this.shape_13.setTransform(21.325,8.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACAVIAAgCIABAAIAEgBIABgCIAAgEIAAgQIAAgIQgCgCgEAAQgEAAgFAFIAAAVIAAAFIACACIAFAAIAAACIgUAAIAAgCIABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQACgCAAgEIAAgOIgBgJIgBgCIgCgBIgCABIgBgCIAMgFIACAAIAAAJQAHgJAGAAQADAAACACQACACACADIABAIIAAARIAAAFIACACIAEAAIAAACg");
	this.shape_14.setTransform(17.25,7.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAOQgEgGAAgHQgBgFADgFQADgGAEgDQAFgCAEAAQAJAAAGAHQAEAGAAAHQAAAFgCAFQgDAGgFADQgEACgFAAQgJAAgFgHgAgFgQQgCABgCAEQgCADABAGQAAAIADAGQAEAGAEAAQAFAAACgDQADgEAAgIQAAgKgEgGQgEgEgEAAIgEABg");
	this.shape_15.setTransform(12.75,8.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAQQgFgGAAgKQAAgIAGgGQAGgGAGAAQAGAAAEADQAEADAAADIgBADIgDABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgEQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEAAgCADQgEAEAAAHQAAAHAEAFQAEAGAEAAQAEAAAEgDQADgCACgGIABABQgCAIgFAEQgEAEgGAAQgFAAgGgFg");
	this.shape_16.setTransform(8.5,8.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCARIgBgDIABgFIACgEIAAgDIgFADIgEAFIgDABIgCgBIgBgDIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIAGgBIAFgCIgFgBIgHgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgDIACgBIADABIAEAEIAFAEIgBgGIgCgGIABgDIACgBIADABIAAADIAAAGIgCAGIAEgDIAFgFIACgBQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIABACIgCADQgBABgFABIgGABIAGACIAGACIACADIgBADIgDABIgCgBIgFgEIgEgEIABAFIABAHIAAADIgCABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_17.setTransform(4.25,5.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(0,0,119.8,14.1), null);


(lib.txt3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBA93D").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAFAJAAQAKgBAFgEQAFgEAAgFQAAgFgEgEQgDgBgMgDQgQgFgGgCQgGgCgEgGQgDgFAAgGQAAgGADgGQACgFAFgDQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAAEACACQACACAEABIAMAFIAWAHQAHABADAFQAEAGAAAHQAAAHgFAHQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape.setTransform(157.275,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBA93D").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIgBAGgEQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgMgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_1.setTransform(148.325,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBA93D").s().p("AgHA9IAAh5IAPAAIAAB5g");
	this.shape_2.setTransform(141.7,28.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBA93D").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAFQAJAHAEAKQAEAKAAAOQAAANgEAJQgFAMgJAFQgKAGgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAARQAAAPAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgQgHgJQgHgIgJgBQgJAAgHAJg");
	this.shape_3.setTransform(135.325,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBA93D").s().p("AAtAtIAAg2QAAgKgBgEQgCgDgEgDQgDgCgGAAQgJAAgGAGQgGAGAAAOIAAAyIgOAAIAAg5QAAgJgEgFQgDgFgJAAQgGAAgFADQgGAEgCAGQgDAGAAAMIAAAtIgPAAIAAhXIAOAAIAAAMQAEgHAHgDQAHgEAJAAQAJAAAHAEQAFAEACAHQALgPARAAQANAAAHAHQAHAIAAAPIAAA7g");
	this.shape_4.setTransform(123.325,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBA93D").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_5.setTransform(114.325,28.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBA93D").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAFAJAAQAKgBAFgEQAFgEAAgFQAAgFgEgEQgDgBgMgDQgQgFgGgCQgGgCgEgGQgDgFAAgGQAAgGADgGQACgFAFgDQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAAEACACQACACAEABIAMAFIAWAHQAHABADAFQAEAGAAAHQAAAHgFAHQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_6.setTransform(108.125,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_7.setTransform(94.475,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBA93D").s().p("AggA2QgIgHAAgLQAAgGADgGQADgFAFgDQAFgEAGgBIANgDQARgCAJgDIAAgDQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABAMIAAAUQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAVQgJABgEACQgEABgCAEQgCADAAAEQAAAGAFAEQAEAEAJAAQAIAAAGgEQAHgEADgHQADgFAAgKIAAgFQgIADgQADgAgbgpQAAgJAFgFQAFgFAHAAQAFAAAIAFQAFACADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIACgGIALAAQAAAJgFAFQgFAFgGAAQgGAAgHgFQgGgDgCAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgCACAAAEg");
	this.shape_8.setTransform(85.025,28.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBA93D").s().p("AgCA6QgEgDgCgEQgCgFAAgNIAAgyIgKAAIAAgLIAKAAIAAgWIAPgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIACADIAGABIAGgBIADAOIgMABQgIAAgEgCg");
	this.shape_9.setTransform(78.1,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBA93D").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_10.setTransform(69.025,28.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_11.setTransform(62.375,30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBA93D").s().p("AgLA+IAAhMIgOAAIAAgLIAOAAIAAgJQAAgJABgFQACgGAGgDQAEgEAKAAIAOABIgCAOIgJgBQgHAAgDADQgDADAAAIIAAAIIASAAIAAALIgSAAIAABMg");
	this.shape_12.setTransform(55.725,28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBA93D").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAHIABANIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCAEAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_13.setTransform(43.525,30);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBA93D").s().p("AgaAiQgMgLAAgWQABgOAEgLQAFgLAKgFQAKgFAKAAQAOAAAKAHQAIAIADANIgPACQgCgJgFgEQgFgFgIAAQgKAAgHAIQgHAJAAAQQAAASAHAIQAHAHAKABQAJgBAGgFQAFgFABgMIAQACQgDAQgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_14.setTransform(34.85,30);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBA93D").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQAKgOASAAQAIAAAGADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_15.setTransform(25.6,29.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBA93D").s().p("AgTAqQgHgDgDgEQgEgFgBgGIgBgPIAAg1IAPAAIAAAvIABAQQABAGAFAEQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_16.setTransform(16.125,30.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EBA93D").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQAKgOASAAQAIAAAGADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_17.setTransform(6.7,29.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EBA93D").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQAKgOASAAQAIAAAGADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_18.setTransform(151.15,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBA93D").s().p("AgcAyQgMgMAAgVQAAgVAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAPAHAHQAIAIAKAAQAIAAAGgEQAFgFAEgJIAPACQgDANgKAIQgKAHgQAAQgSAAgLgMgAgPgKQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHgAAIgsIAAgRIAPAAIAAARgAgWgsIAAgRIAPAAIAAARg");
	this.shape_19.setTransform(141.675,11.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAVQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_20.setTransform(132.225,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EBA93D").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQAEgDAFAAQAHAAAIAEIgFAPQgFgDgGAAQgFAAgDADQgEACgCAGQgCAIAAAJIAAAtg");
	this.shape_21.setTransform(125.4,12.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EBA93D").s().p("AgBA6QgFgDgCgEQgBgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIANgJIAAAfIAPAAIAAALIgPAAIAAAzIABAIIADADIAFABIAGgBIACAOIgLABQgIAAgDgCg");
	this.shape_22.setTransform(119.65,11.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EBA93D").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_23.setTransform(115.275,11.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBA93D").s().p("AgcA3QgMgIgGgPQgHgPAAgRQAAgTAIgOQAHgOANgHQAOgIAPAAQASAAAMAJQANAKAFARIgQADQgEgNgIgGQgIgGgNAAQgNAAgJAGQgKAIgDALQgEALAAAMQAAAPAEALQAFAMAJAGQAKAFAKABQAOgBAJgHQAJgJAEgPIAQAFQgFATgNALQgOAKgTAAQgSAAgNgIg");
	this.shape_24.setTransform(107.325,11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBA93D").s().p("AAtAtIAAg2QAAgJgBgFQgCgEgEgCQgDgCgGAAQgJAAgGAGQgGAGAAAOIAAAyIgOAAIAAg5QAAgJgEgFQgDgFgJAAQgGAAgFADQgGAEgCAGQgDAGAAAMIAAAtIgPAAIAAhXIAOAAIAAAMQAEgHAHgDQAHgEAJAAQAJAAAHAEQAFAEACAIQALgQARAAQANAAAHAHQAHAIAAAOIAAA8g");
	this.shape_25.setTransform(89.325,12.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EBA93D").s().p("AgTAqQgHgDgDgEQgEgFgBgGIgBgPIAAg1IAPAAIAAAvIABAQQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_26.setTransform(77.475,13.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBA93D").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQAEgDAEAAQAIAAAIAEIgFAPQgGgDgFAAQgFAAgDADQgEACgBAGQgDAIAAAJIAAAtg");
	this.shape_27.setTransform(65.95,12.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EBA93D").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgCQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCADQgCAEAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_28.setTransform(57.675,13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBA93D").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAEIgFAPQgGgDgFAAQgFAAgDADQgEACgBAGQgDAIAAAJIAAAtg");
	this.shape_29.setTransform(50.85,12.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EBA93D").s().p("AglA+IAAh5IAOAAIAAALQAEgHAGgDQAHgDAHAAQALAAAJAFQAJAHAEAKQAEALAAANQAAANgEAKQgFAKgJAGQgKAGgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAARQAAAPAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJAAgHAJg");
	this.shape_30.setTransform(42.825,14.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBA93D").s().p("AAtAtIAAg2QAAgJgBgFQgCgEgEgCQgDgCgGAAQgJAAgGAGQgGAGAAAOIAAAyIgOAAIAAg5QAAgJgEgFQgDgFgJAAQgGAAgFADQgGAEgCAGQgDAGAAAMIAAAtIgPAAIAAhXIAOAAIAAAMQAEgHAHgDQAHgEAJAAQAJAAAHAEQAFAEACAIQALgQARAAQANAAAHAHQAHAIAAAOIAAA8g");
	this.shape_31.setTransform(30.825,12.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAVQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_32.setTransform(18.975,13);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBA93D").s().p("AgcA3QgMgIgGgPQgHgPAAgRQAAgTAIgOQAHgOANgHQAOgIAPAAQASAAAMAJQANAKAFARIgQADQgEgNgIgGQgIgGgNAAQgNAAgJAGQgKAIgDALQgEALAAAMQAAAPAEALQAFAMAJAGQAKAFAKABQAOgBAJgHQAJgJAEgPIAQAFQgFATgNALQgOAKgTAAQgSAAgNgIg");
	this.shape_33.setTransform(8.225,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,163.8,40), null);


(lib.txt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBA93D").s().p("AgCA6QgEgDgCgEQgCgFAAgNIAAgyIgKAAIAAgLIAKAAIAAgWIAPgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIACADIAGABIAGgBIADAOIgMABQgIAAgEgCg");
	this.shape.setTransform(201.85,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBA93D").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQAEgDAEAAQAIAAAIAEIgFAPQgGgDgFAAQgFAAgDADQgEACgCAGQgCAIAAAJIAAAtg");
	this.shape_1.setTransform(197.25,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAVQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_2.setTransform(188.975,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBA93D").s().p("AgLA+IAAhMIgOAAIAAgLIAOAAIAAgJQAAgKABgDQACgHAGgDQAEgEAKAAIAOABIgCAOIgJgBQgHAAgDADQgDADAAAHIAAAJIASAAIAAALIgSAAIAABMg");
	this.shape_3.setTransform(182.325,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBA93D").s().p("AAtAtIAAg2QAAgJgBgFQgCgEgEgCQgDgCgGAAQgJAAgGAGQgGAGAAAOIAAAyIgOAAIAAg5QAAgJgEgFQgDgFgJAAQgGAAgFADQgGAEgCAGQgDAGAAAMIAAAtIgPAAIAAhXIAOAAIAAAMQAEgHAHgDQAHgEAJAAQAJAAAHAEQAFAEACAIQALgQARAAQANAAAHAHQAHAIAAAOIAAA8g");
	this.shape_4.setTransform(172.525,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAVQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_5.setTransform(160.675,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBA93D").s().p("AgcA3QgMgIgGgPQgHgPAAgRQAAgTAIgOQAHgOANgHQAOgIAPAAQASAAAMAJQANAKAFARIgQADQgEgNgIgGQgIgGgNAAQgNAAgJAGQgKAIgDALQgEALAAAMQAAAPAEALQAFAMAJAGQAKAFAKABQAOgBAJgHQAJgJAEgPIAQAFQgFATgNALQgOAKgTAAQgSAAgNgIg");
	this.shape_6.setTransform(149.925,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBA93D").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_7.setTransform(133.975,11.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBA93D").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAPAHAIQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_8.setTransform(124.775,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBA93D").s().p("AgbAiQgKgLgBgWQAAgOAGgLQAEgLAKgFQAKgFAKAAQAOAAAJAHQAKAIACANIgPACQgCgJgFgEQgFgFgHAAQgLAAgHAIQgHAJAAAQQAAASAHAIQAHAHAKABQAIgBAGgFQAGgFABgMIAQACQgDAQgKAIQgKAJgOAAQgSAAgLgMg");
	this.shape_9.setTransform(116.1,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBA93D").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgFgDgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQALgOAQAAQAIAAAIADQAGADADAEQADAFACAGIABAPIAAA1g");
	this.shape_10.setTransform(106.85,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EBA93D").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgCQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCADQgCAEAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_11.setTransform(97.375,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBA93D").s().p("AgGAsIghhXIAQAAIATA0IAEASIAGgSIATg0IAQAAIgiBXg");
	this.shape_12.setTransform(88.45,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBA93D").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_13.setTransform(79.175,11.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBA93D").s().p("AAnA9IgPglIgyAAIgNAlIgRAAIAvh5IAQAAIAyB5gAgIgYIgNAjIAoAAIgMghQgGgPgCgKQgCAMgFALg");
	this.shape_14.setTransform(69.075,11.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBA93D").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAFAJAAQAKAAAFgFQAFgDAAgHQAAgFgEgDQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgFQACgFAFgDQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAEQAAAEACABQACADAEABIAMAFIAWAHQAHABADAGQAEAFAAAHQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_15.setTransform(54.375,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBA93D").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAVQAAAPgFALQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_16.setTransform(45.425,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EBA93D").s().p("AgaAiQgLgLAAgWQAAgOAEgLQAFgLAKgFQAKgFAKAAQAOAAAKAHQAIAIADANIgPACQgCgJgFgEQgFgFgIAAQgKAAgHAIQgHAJAAAQQAAASAHAIQAGAHAKABQAJgBAHgFQAFgFABgMIAPACQgCAQgKAIQgKAJgPAAQgQAAgLgMg");
	this.shape_17.setTransform(36.75,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EBA93D").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAAMQAJgOASAAQAHAAAHADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_18.setTransform(27.5,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBA93D").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgCQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCADQgCAEAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_19.setTransform(18.025,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EBA93D").s().p("AgtA9IAAh5IAtAAQAOAAAIAEQAIADAFAIQAFAIAAAIQAAAIgEAHQgFAHgIAEQALADAGAHQAGAIAAAKQAAAJgEAHQgDAIgGAEQgFAEgIACQgIACgLAAgAgdAuIAeAAIALAAQAFgBADgDQAFgCACgEQACgFAAgGQAAgGgDgFQgEgFgGgCQgGgCgLAAIgcAAgAgdgJIAaAAQAKAAAFgBQAGgCADgEQADgFAAgGQAAgGgDgFQgDgEgFgCQgGgCgMAAIgYAAg");
	this.shape_20.setTransform(7.85,11.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,206.3,23), null);


(lib.txt1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CITROËN c3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E45").s().p("AgcBEQgNgFgHgMQgHgLgBgPIASgBQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAIgEQAJgDADgFQAFgGAAgHQgBgGgDgFQgEgFgJgDQgGgDgTgFQgTgEgIgEQgKgFgGgIQgEgIAAgJQAAgMAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAHAKQAGAKAAANIgSABQgBgOgJgGQgIgIgQAAQgRABgHAGQgJAGABAJQAAAIAFAFQAGAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHAKQgGALgNAFQgLAGgQAAQgTAAgNgGg");
	this.shape.setTransform(237.6,12.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383E45").s().p("AgjBAQgQgKgIgQQgJgSAAgSQABgjATgUQATgUAdAAQAUAAAQAJQAQAKAJAQQAHARABAVQAAAWgJARQgJASgQAIQgQAJgTAAQgTAAgQgKgAghgrQgPAOAAAfQAAAaAOAPQAOAPAUAAQAVgBAPgPQANgOAAgcQAAgQgGgOQgGgNgLgGQgLgIgPAAQgTAAgOAOg");
	this.shape_1.setTransform(223.25,12.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383E45").s().p("AAnBHIgTgdIgNgUQgGgHgDgCQgEgDgFgCIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUAAAKAEQAKAEAFAKQAGAKAAAMQAAAOgJALQgKAKgVACQAIAEAEAEQAIAHAHALIAZAngAgrgIIApAAQAMAAAHgCQAHgDAEgGQAEgGAAgGQAAgLgHgGQgIgHgQAAIgsAAg");
	this.shape_2.setTransform(208.875,12.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383E45").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_3.setTransform(198.25,12.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383E45").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_4.setTransform(189.025,12.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383E45").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgSQAIgRARgKQAQgIAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgGgJgEQgIgEgLAAQgMAAgKAEQgJAEgGAHQgGAGgDAHQgGAOAAAPQAAATAHANQAHANAMAFQANAHANAAQAMAAAMgFQAMgFAGgFIAAgbIgqAAIAAgQIA8AAIAAA0QgOAMgOAFQgPAGgQAAQgUAAgRgJg");
	this.shape_5.setTransform(174.225,12.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383E45").s().p("AAuBHIgRgrIg7AAIgQArIgUAAIA3iOIAUAAIA6COgAgJgdIgPAqIAvAAIgPgnIgJgeQgDAOgFANg");
	this.shape_6.setTransform(159.85,12.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383E45").s().p("AgbBEQgOgFgHgMQgIgLAAgPIASgBQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgDAFgFQADgGABgHQgBgGgDgFQgEgFgJgDQgGgDgTgFQgUgEgHgEQgLgFgEgIQgGgIABgJQgBgMAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgJgGQgIgIgQAAQgRABgHAGQgJAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHAKQgGALgNAFQgMAGgPAAQgTAAgMgGg");
	this.shape_7.setTransform(146.45,12.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383E45").s().p("AgcBEQgNgFgHgMQgHgLgBgPIASgBQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAHgDAEgFQAFgGAAgHQAAgGgEgFQgEgFgJgDQgGgDgTgFQgTgEgIgEQgKgFgGgIQgEgIAAgJQAAgMAFgJQAHgJALgFQANgFAOAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgJgGQgIgIgQAAQgRABgHAGQgIAGAAAJQAAAIAFAFQAGAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHAKQgGALgMAFQgNAGgPAAQgSAAgOgGg");
	this.shape_8.setTransform(133.1,12.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383E45").s().p("AAuBHIgRgrIg7AAIgQArIgUAAIA3iOIAUAAIA6COgAgJgdIgPAqIAvAAIgPgnIgJgeQgDAOgFANg");
	this.shape_9.setTransform(119.8,12.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383E45").s().p("Ag2BHIAAiOIA2AAIAVACQALACAHAEQAHAGAFAIQADAJAAAKQAAATgLALQgLANgfABIgkAAIAAA5gAgjgDIAkAAQATABAHgIQAIgGAAgNQAAgJgEgGQgFgGgIgDQgEgBgNAAIgkAAg");
	this.shape_10.setTransform(106.8,12.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383E45").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_11.setTransform(87.825,12.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383E45").s().p("Ag6BHIAAiOIAxAAQAQABAIACQANACAIAIQAMAJAFAPQAGAPAAATQAAAPgEANQgEANgGAIQgFAIgIAFQgHAEgKADQgKACgMAAgAgnA2IAeAAQANAAAIgCQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgXgIgMQgHgLgLgFQgHgDgQAAIgeAAg");
	this.shape_12.setTransform(73.925,12.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383E45").s().p("AAuBHIgRgrIg7AAIgPArIgVAAIA3iOIAUAAIA6COgAgJgdIgPAqIAvAAIgPgnIgJgeQgDAOgFANg");
	this.shape_13.setTransform(54.2,12.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383E45").s().p("AAyBHIAAh3IgqB3IgQAAIgph4IAAB4IgSAAIAAiOIAcAAIAiBlIAGAVIAHgXIAjhjIAZAAIAACOg");
	this.shape_14.setTransform(39.225,12.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383E45").s().p("AAtBHIgQgrIg7AAIgQArIgUAAIA3iOIATAAIA7COgAgJgdIgPAqIAvAAIgPgnIgJgeQgDAOgFANg");
	this.shape_15.setTransform(24.2,12.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383E45").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgSQAIgRARgKQAQgIAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgGgJgEQgIgEgLAAQgMAAgKAEQgJAEgGAHQgGAGgDAHQgGAOAAAPQAAATAHANQAHANAMAFQANAHANAAQAMAAAMgFQAMgFAGgFIAAgbIgqAAIAAgQIA8AAIAAA0QgOAMgOAFQgPAGgQAAQgUAAgRgJg");
	this.shape_16.setTransform(9.675,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,246.6,26.4), null);


(lib.roadsBottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/NjIAA7FMAx/AAAIAAbFg");
	mask.setTransform(159.9999,86.7);

	// roadsBottom
	this.instance = new lib.fond();
	this.instance.setTransform(0,-77,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roadsBottom, new cjs.Rectangle(0,0,320,173), null);


(lib.roads = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bGgIAAs/MAu3AAAIAAM/g");
	mask.setTransform(150,41.6);

	// Layer_1
	this.instance = new lib.fond();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roads, new cjs.Rectangle(0,0,300,83.2), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBiQgvgBgegbQgdgbAAgrQAAgoAcgbQAhgeAtAAICfgBIAAAmIibAAQgdABgSARQgRAQAAAaQAAAbARAQQASARAdAAICbAAIAAAng");
	this.shape.setTransform(13.325,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAPQgHAAgDgFQgFgEAAgGQAAgFAFgEQADgEAHAAIA/AAQAGAAAFAEQAEAEAAAFQgBAGgEAEQgEAFgGAAg");
	this.shape_1.setTransform(150.2,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah4BjIAAjFIDxAAIAAAlIjFAAIAAArICsAAIAAAjIisAAIAAAtIDFAAIAAAlg");
	this.shape_2.setTransform(155.9,31.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBoQgxgBgegcQgegdAAgtIAAgBQgBgqAegdQAigfAuAAIAngBIAoABQAxACAeAcQAeAdAAArIAAABQAAAqgdAeQgiAfguAAgAhTguQgSARAAAdQAAAdASASQARARAfABIAmABQAcAAAEgBIACAAQAegCARgRQASgRAAgdIAAAAQAAgdgSgRQgSgRgfgCIhHAAQgeABgRASg");
	this.shape_3.setTransform(123.1234,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiMBjIAAjFIDGAAQAjAAATAQQATAQAAAcQAAAggRAMQgTAOgtABIgWAAIBxBOIhAAAIiIhjIAAgLIBvAAQAUABAIgIQAFgGAAgNQAAgYgaAAIibAAIAACgg");
	this.shape_4.setTransform(89.625,31.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAPQgGAAgEgFQgFgEAAgGQAAgFAFgEQAEgEAGAAIBAAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGABg");
	this.shape_5.setTransform(161.525,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABXBjIAAhiQABghgTgPQgQgOghAAIhrAAIAACgIgsAAIAAjFIChAAQAzAAAbAbQAYAZAAAqIAABng");
	this.shape_6.setTransform(187.4,31.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBjIAAjFIArAAIAADFg");
	this.shape_7.setTransform(36.15,31.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBjIAAigIhxAAIAAglIENAAIAAAlIhxAAIAACgg");
	this.shape_8.setTransform(56.925,31.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcENQgsgWgegnQgggogSg2QgRg2AAg8QAAg7ARg2QASg2AggoQAegnAsgWQAsgWAwAAQAxAAAsAWQAsAWAeAnQAgAoASA2QASA2AAA7QAAA8gSA2QgSA2ggAoQgeAngsAWQgsAWgxAAQgwAAgsgWgAirCYQAcA1AtAdQAtAfA1AAQA2AAAtgeQArgdAdgzIitiAIAAAAgADBBmQAHgXADgVIjMiXIjJCVQACATAHAYIC/iNgADQgIQgDhug6hJQg8hJhXAAQhVAAg8BIQg6BJgDBtIDOiZg");
	this.shape_9.setTransform(-40,29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-63.4,0,264,58.3), null);


(lib.legal1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape.setTransform(210.75,179.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_1.setTransform(205.8,177.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_2.setTransform(199.575,177.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_3.setTransform(194.875,177.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_4.setTransform(190.325,178.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_5.setTransform(186.525,176.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgEAAgDACQgCABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_6.setTransform(179.1,177.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_7.setTransform(172.9,177.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_8.setTransform(169.3,177.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_9.setTransform(164.975,177.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_10.setTransform(160.225,176.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_11.setTransform(154.1,176.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_12.setTransform(150.175,177.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_13.setTransform(143.025,177.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_14.setTransform(138.35,177.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_15.setTransform(133.375,177.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_16.setTransform(129.95,176.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_17.setTransform(126.725,177.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_18.setTransform(123.4,177.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_19.setTransform(119.1,177.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIALgbIAIAAIgSAtg");
	this.shape_20.setTransform(114.45,177.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIAAgKQgEAGgIAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgDgEgGAAQgEAAgEAEg");
	this.shape_21.setTransform(107.15,178.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_22.setTransform(102.35,177.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_23.setTransform(98.9,176.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_24.setTransform(95.275,177.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_25.setTransform(90.475,177.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_26.setTransform(87.025,176.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_27.setTransform(83.975,177.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_28.setTransform(79.15,177.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_29.setTransform(75.7,176.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQAEAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_30.setTransform(71.15,177.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_31.setTransform(66.85,177.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_32.setTransform(62.425,176.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_33.setTransform(57.425,177.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXAgIAAg1IgTA1IgHAAIgSg2IAAA2IgJAAIAAg/IANAAIAQAsIACAKIADgKIAPgsIAMAAIAAA/g");
	this.shape_34.setTransform(51.225,176.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_35.setTransform(45.05,177.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEACABQAEADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgDAEQgCAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFAAAIQAAAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_36.setTransform(39.95,178.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_37.setTransform(35.125,177.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAgIAAg/IAYAAIAJAAQAGABACACQAEADACAEQACAEAAAEQAAAJgGAEQgFAGgOAAIgPAAIAAAagAgPgBIAPAAQAJAAAEgDQADgDAAgFQAAgEgCgDQgDgDgDgBIgIgBIgPAAg");
	this.shape_38.setTransform(29.85,176.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_39.setTransform(22.025,177.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_40.setTransform(17.325,177.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_41.setTransform(12.225,177.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_42.setTransform(8.925,176.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAUAgIgHgTIgaAAIgHATIgJAAIAYg/IAJAAIAaA/gAgDgMIgHASIAUAAIgHgRIgDgNIgDAMg");
	this.shape_43.setTransform(5,176.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_44.setTransform(357.15,168.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_45.setTransform(352.725,167.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_46.setTransform(349.25,167.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_47.setTransform(347.275,167.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_48.setTransform(341.4,168.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_49.setTransform(337.8,168.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_50.setTransform(333.475,168.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_51.setTransform(327.8,168.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_52.setTransform(323.4,167.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgHAAIAAgGIAHAAIAAgFIAAgHIAEgFQACgCAFAAIAIABIgBAHIgFgBQgEAAgBACQgCACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_53.setTransform(321.1,167.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_54.setTransform(317.175,168.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_55.setTransform(312.475,168.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgEAGgIAAQgJAAgFgHQgGgHAAgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgFACgHAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_56.setTransform(305.2,169.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_57.setTransform(300.4,168.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_58.setTransform(296.95,167.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACADADQABAEAAAGIAAAdg");
	this.shape_59.setTransform(293.5,167.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_60.setTransform(288.775,168.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_61.setTransform(285.6,167.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_62.setTransform(283.625,167.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_63.setTransform(280.325,167.575);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_64.setTransform(275.225,168.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_65.setTransform(270.425,169.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_66.setTransform(263.025,169.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_67.setTransform(257.925,168.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_68.setTransform(254.3,167.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_69.setTransform(251.075,167.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_70.setTransform(246.325,168.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_71.setTransform(241.65,168.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_72.setTransform(236.525,167.575);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_73.setTransform(229.3,167.525);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIACAHIgHABIgFgBg");
	this.shape_74.setTransform(225.65,167.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_75.setTransform(223.4,167.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgIAjIgJAAIgOgtIAIAAIAHAaIADAKIADgKIAHgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_76.setTransform(219.2,168.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_77.setTransform(211.325,169.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_78.setTransform(208.075,167.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_79.setTransform(205.95,167.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_80.setTransform(202.2,168.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_81.setTransform(197.25,168.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_82.setTransform(192.675,168.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgOASQgGgGgBgMQABgKAGgHQAGgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_83.setTransform(187.85,168.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_84.setTransform(184.25,168.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_85.setTransform(177.5,168.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_86.setTransform(173.9,168.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_87.setTransform(169.575,168.425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgCACQgDABgBAEIgCAJIAAAYIgHAAIAAguIAGAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_88.setTransform(163.4,168.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_89.setTransform(154.575,167.575);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_90.setTransform(149.8,168.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_91.setTransform(144.825,168.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_92.setTransform(138.675,170.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_93.setTransform(135.225,168.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_94.setTransform(130.55,168.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEACABQAEADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgDAEQgCAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_95.setTransform(125.45,169.325);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_96.setTransform(120.625,168.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_97.setTransform(115.925,168.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_98.setTransform(111.475,168.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_99.setTransform(106.775,168.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_100.setTransform(101.975,169.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgCAJIAAAYIgHAAIAAguIAGAAIAAAHQACgEAEgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_101.setTransform(93.2,168.375);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_102.setTransform(86.975,168.475);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_103.setTransform(82.275,168.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_104.setTransform(77.725,169.275);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_105.setTransform(73.925,167.525);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgEACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_106.setTransform(66.5,168.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_107.setTransform(60.3,168.425);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAFAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_108.setTransform(56.7,168.375);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_109.setTransform(52.375,168.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_110.setTransform(47.625,167.525);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgBAEQgDAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_111.setTransform(39.9,169.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_112.setTransform(35.1,168.375);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_113.setTransform(31.65,167.525);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_114.setTransform(28.2,168.375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_115.setTransform(24.75,167.525);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_116.setTransform(21.275,168.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCABgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_117.setTransform(17.65,167.625);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_118.setTransform(13.9,168.375);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_119.setTransform(8.925,168.425);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_120.setTransform(4.375,168.425);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_121.setTransform(352.775,158.975);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_122.setTransform(349.4,158.175);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_123.setTransform(345.65,158.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_124.setTransform(340.7,158.975);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACADADQABAEAAAGIAAAdg");
	this.shape_125.setTransform(335.75,158.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_126.setTransform(331.025,158.975);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_127.setTransform(325.2,158.175);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_128.setTransform(321.45,158.975);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_129.setTransform(316.725,158.975);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_130.setTransform(312.025,158.975);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_131.setTransform(308.45,158.925);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_132.setTransform(305.45,158.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_133.setTransform(301.7,158.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_134.setTransform(296.925,158.075);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgIAAIAAgGIAIAAIAAgFIAAgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgBACQgCACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_135.setTransform(290.8,158.025);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_136.setTransform(286.875,158.975);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_137.setTransform(279.5,158.975);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_138.setTransform(274.775,158.975);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_139.setTransform(270.075,158.975);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_140.setTransform(265.15,158.975);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_141.setTransform(261.675,158.075);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_142.setTransform(258.25,158.975);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_143.setTransform(254.65,158.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_144.setTransform(247.9,158.975);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_145.setTransform(242.95,158.075);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_146.setTransform(239.3,158.175);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACABADQACAEAAAGIAAAdg");
	this.shape_147.setTransform(233.1,158.075);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_148.setTransform(229.45,158.175);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_149.setTransform(227.2,158.075);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgJAjIgIAAIgOgtIAIAAIAHAaIADAKIACgKIAIgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_150.setTransform(223,158.975);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_151.setTransform(215.075,158.975);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAEgEQAFgEAGAAQAFAAAFACQADACADAEIAEAKIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgFAGAAAPQAAAQAEAFQAEAFAEAAQAFAAAFgFQADgFAAgQQAAgPgDgFQgFgFgFAAQgEAAgDAEg");
	this.shape_152.setTransform(210.35,158.125);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgQQAAgSAHgJQAGgHAJAAQAHAAAFAEQAFAFABAHIgIABQgBgFgCgCQgDgDgFAAQgDAAgCACQgEACgCAGQgCAFAAAKQACgFAEgCQAFgCADAAQAIAAAGAGQAFAFAAAJQAAAGgCAFQgDAFgFADQgEADgGAAQgJAAgGgHgAgIABQgDAEAAAGIABAIQACADADACQADACADAAQAFAAADgEQAEgEAAgHQAAgGgDgEQgEgDgFAAQgFAAgEADg");
	this.shape_153.setTransform(205.425,158.125);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDIADgHIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_154.setTransform(200.475,158.125);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_155.setTransform(195.225,158.075);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_156.setTransform(188.15,158.975);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_157.setTransform(183.2,158.075);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_158.setTransform(179.55,158.175);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_159.setTransform(173.35,158.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_160.setTransform(169.9,158.075);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_161.setTransform(163.825,158.125);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_162.setTransform(159.05,158.975);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_163.setTransform(154.325,158.975);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_164.setTransform(151.15,158.075);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_165.setTransform(149.05,158.925);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_166.setTransform(144.725,158.975);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_167.setTransform(141.275,158.075);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_168.setTransform(137.825,159.025);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_169.setTransform(133.025,159.825);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_170.setTransform(127.925,158.975);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_171.setTransform(123.125,159.825);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_172.setTransform(115.825,158.975);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_173.setTransform(111.125,158.975);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgJAjIgIAAIgOgtIAIAAIAHAaIADAKIADgKIAHgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_174.setTransform(105.45,158.975);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_175.setTransform(98.6,158.175);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_176.setTransform(96.125,158.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_177.setTransform(91.2,160.85);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_178.setTransform(87.325,158.125);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_179.setTransform(82.55,158.975);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIAAgKQgEAGgIAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgDgEgGAAQgEAAgEAEg");
	this.shape_180.setTransform(77.45,159.875);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_181.setTransform(72.65,158.925);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_182.setTransform(67.675,158.975);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_183.setTransform(62.75,158.075);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_184.setTransform(58.175,158.975);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_185.setTransform(53.35,158.925);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_186.setTransform(48.375,159.025);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_187.setTransform(41.275,159.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_188.setTransform(38.025,158.075);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_189.setTransform(36.075,158.075);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_190.setTransform(32.625,158.975);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_191.setTransform(29.2,158.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_192.setTransform(27.05,158.175);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_193.setTransform(23.3,158.925);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_194.setTransform(18.35,158.975);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_195.setTransform(13.625,158.975);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_196.setTransform(9.175,158.975);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_197.setTransform(4.5,158.975);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHgBgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgBAEQgDAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg");
	this.shape_198.setTransform(337.25,150.425);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_199.setTransform(332.45,149.475);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_200.setTransform(329,148.625);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_201.setTransform(325.55,149.475);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_202.setTransform(322.1,148.625);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_203.setTransform(318.625,149.525);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_204.setTransform(312.45,149.475);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_205.setTransform(306.25,149.525);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_206.setTransform(302.65,149.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_207.setTransform(297.125,152.025);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEACABQAEADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgDAEQgCAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_208.setTransform(293.3,150.425);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_209.setTransform(288.5,149.475);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_210.setTransform(285.05,148.625);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_211.setTransform(282.9,148.725);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_212.setTransform(280.45,148.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_213.setTransform(276.7,149.525);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_214.setTransform(271.975,149.525);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_215.setTransform(267.3,149.525);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_216.setTransform(262.475,150.375);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_217.setTransform(257.675,150.475);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_218.setTransform(254.25,148.725);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_219.setTransform(248.425,149.525);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_220.setTransform(245.1,148.625);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_221.setTransform(241.65,149.475);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_222.setTransform(236.675,149.525);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAFgCQAEAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_223.setTransform(233.1,149.475);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_224.setTransform(230.1,148.725);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_225.setTransform(226.725,149.525);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_226.setTransform(221.9,149.525);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_227.setTransform(218.425,148.625);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_228.setTransform(215,149.525);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_229.setTransform(207.575,149.525);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCgBgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_230.setTransform(203.95,148.725);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_231.setTransform(200.2,149.475);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_232.setTransform(196.75,148.625);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_233.setTransform(190.975,150.375);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_234.setTransform(185.875,149.525);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_235.setTransform(180.95,149.525);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_236.setTransform(177.475,148.625);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_237.setTransform(171.6,149.525);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_238.setTransform(166.65,148.625);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_239.setTransform(163,148.725);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_240.setTransform(156.775,149.525);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_241.setTransform(152.075,149.525);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_242.setTransform(148.875,148.625);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_243.setTransform(145.425,149.525);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_244.setTransform(139.35,148.725);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_245.setTransform(135.575,149.575);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_246.setTransform(130.775,148.675);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_247.setTransform(124.475,152.025);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_248.setTransform(121.025,149.525);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_249.setTransform(116.35,149.525);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_250.setTransform(112.9,148.625);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAEAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_251.setTransform(110.8,149.475);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_252.setTransform(106.475,149.575);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIADAAIADAAIACAHIgGABIgHgBg");
	this.shape_253.setTransform(102.85,148.725);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_254.setTransform(99.1,149.475);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_255.setTransform(94.15,149.525);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_256.setTransform(89.575,149.525);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_257.setTransform(82.3,149.525);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIALgbIAIAAIgSAtg");
	this.shape_258.setTransform(77.65,149.525);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_259.setTransform(74.45,148.625);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgIAAIAAgGIAIAAIAAgFIAAgHIAEgFQACgCAFAAIAHABIAAAHIgFgBQgEAAgBACQgCACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_260.setTransform(72.45,148.575);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_261.setTransform(66.375,150.475);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_262.setTransform(63.125,148.625);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_263.setTransform(59.7,149.475);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_264.setTransform(54.725,149.525);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_265.setTransform(48.65,148.725);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_266.setTransform(44.875,149.525);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_267.setTransform(39.95,149.475);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_268.setTransform(32.375,148.675);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_269.setTransform(27.6,149.525);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIAKgbIAJAAIgSAtg");
	this.shape_270.setTransform(22.95,149.525);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_271.setTransform(19.75,148.625);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIAKgbIAIAAIgRAtg");
	this.shape_272.setTransform(16.6,149.525);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_273.setTransform(13.25,149.475);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_274.setTransform(8.925,149.575);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_275.setTransform(4.225,149.525);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_276.setTransform(374.075,140.075);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_277.setTransform(369.375,140.075);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_278.setTransform(364.45,139.175);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_279.setTransform(358.35,139.275);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_280.setTransform(355.875,139.175);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_281.setTransform(350.95,141.95);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_282.setTransform(347.775,139.175);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_283.setTransform(342.775,140.075);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_284.setTransform(337.825,140.075);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_285.setTransform(333.025,139.225);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_286.setTransform(325.5,140.025);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_287.setTransform(320.55,140.075);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQADACABAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_288.setTransform(314.35,140.025);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_289.setTransform(309.65,139.175);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_290.setTransform(306.575,140.075);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_291.setTransform(301.75,140.075);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_292.setTransform(296.925,140.925);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_293.setTransform(292.075,140.075);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_294.setTransform(284.95,140.075);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_295.setTransform(280.125,140.925);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_296.setTransform(275.325,141.025);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_297.setTransform(271.9,139.275);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_298.setTransform(265.675,140.075);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_299.setTransform(258.3,140.075);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_300.setTransform(253.875,139.175);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_301.setTransform(248.875,140.075);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_302.setTransform(242.7,140.025);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_303.setTransform(234.025,140.075);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_304.setTransform(230.4,139.275);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_305.setTransform(225.5,139.275);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_306.setTransform(223.25,139.175);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_307.setTransform(217.175,139.225);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_308.setTransform(212.4,140.075);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_309.setTransform(208.925,139.175);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_310.setTransform(205.625,139.225);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQADgEAEgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_311.setTransform(199.3,140.025);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_312.setTransform(193.075,140.075);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQADAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_313.setTransform(189.5,140.025);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_314.setTransform(185.575,140.075);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_315.setTransform(180.975,140.075);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_316.setTransform(173.675,139.225);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_317.setTransform(168.9,140.025);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_318.setTransform(163.925,140.075);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_319.setTransform(156.55,140.075);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_320.setTransform(151.725,140.925);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_321.setTransform(146.925,141.025);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_322.setTransform(143.5,139.275);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgGAAIAAgGIAGAAIAAgFIABgHIAEgFQACgCAFAAIAIABIgBAHIgFgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_323.setTransform(138.75,139.125);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_324.setTransform(134.825,140.075);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_325.setTransform(127.725,141.025);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_326.setTransform(123,140.075);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_327.setTransform(119.525,139.175);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_328.setTransform(117.575,139.175);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_329.setTransform(114.125,140.075);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQADADAFAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_330.setTransform(109.05,140.975);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_331.setTransform(101.775,140.075);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_332.setTransform(94.925,139.175);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_333.setTransform(89.925,140.075);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_334.setTransform(84.975,140.075);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_335.setTransform(81.35,139.275);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAFAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_336.setTransform(76.5,140.025);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgOASQgGgGgBgMQABgKAGgHQAGgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_337.setTransform(72.2,140.075);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_338.setTransform(68.55,139.275);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_339.setTransform(64.8,140.025);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_340.setTransform(61.35,139.175);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_341.setTransform(59.25,140.025);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_342.setTransform(55.075,140.925);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_343.setTransform(47.55,140.025);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgJAjIgIAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_344.setTransform(41.85,140.075);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_345.setTransform(36.125,140.075);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_346.setTransform(31.2,140.025);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_347.setTransform(26.775,139.175);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_348.setTransform(21.8,140.025);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_349.setTransform(16.825,140.125);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_350.setTransform(9.45,140.025);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_351.setTransform(4.475,140.075);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_352.setTransform(377.05,130.575);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_353.setTransform(372.1,130.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_354.setTransform(367.15,129.725);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_355.setTransform(361.45,130.625);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_356.setTransform(354.525,133.125);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_357.setTransform(351.075,130.625);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAAEACQADACADAEIAEAKIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgEAGgBAPQAAAQAEAFQAEAFAEAAQAGAAAEgFQADgFAAgQQAAgPgDgFQgEgFgGAAQgEAAgDAEg");
	this.shape_358.setTransform(346.35,129.775);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAAEACQADACADAEIAEAKIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgEAGgBAPQAAAQAEAFQAEAFAEAAQAGAAAEgFQADgFAAgQQAAgPgDgFQgEgFgGAAQgEAAgDAEg");
	this.shape_359.setTransform(341.4,129.775);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgOAbQgFgEgBgJIAIAAQABAGADADQAEADAEAAQAFAAAEgEQAEgFAAgHQAAgHgEgDQgDgDgGAAQgDAAgDABQgEACgCACIgHgBIAHggIAeAAIAAAHIgYAAIgEASQAGgEAGAAQAIAAAFAFQAHAFAAAJQAAAJgGAHQgGAHgKAAQgIAAgGgFg");
	this.shape_360.setTransform(336.5,129.825);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_361.setTransform(331.225,129.725);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_362.setTransform(324.15,130.625);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgDAAgCACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_363.setTransform(319.2,129.725);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_364.setTransform(315.55,129.825);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_365.setTransform(309.35,130.625);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_366.setTransform(304.775,130.625);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_367.setTransform(299.95,130.575);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_368.setTransform(296.5,129.725);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_369.setTransform(293.275,130.625);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_370.setTransform(287.5,130.575);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_371.setTransform(283.2,130.625);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIAKgbIAJAAIgSAtg");
	this.shape_372.setTransform(278.55,130.625);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_373.setTransform(273.85,130.625);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_374.setTransform(267.75,129.825);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAMAXIgKgOIgCgEIgLASIgKAAIARgXIgPgWIAJAAIAIALIACAFIAEgFIAHgLIAJAAIgPAWIARAXg");
	this.shape_375.setTransform(264.3,130.625);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_376.setTransform(259.6,130.625);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_377.setTransform(255.95,129.825);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_378.setTransform(250.025,131.575);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_379.setTransform(244.05,130.575);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgEACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_380.setTransform(236.6,130.575);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_381.setTransform(230.375,130.675);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_382.setTransform(225.275,129.775);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_383.setTransform(217.875,129.775);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_384.setTransform(214.45,130.575);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_385.setTransform(210.125,130.625);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_386.setTransform(205.025,129.775);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_387.setTransform(200.25,130.575);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_388.setTransform(195.275,130.625);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_389.setTransform(191.65,129.825);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_390.setTransform(188.125,130.625);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_391.setTransform(181.225,130.625);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgCALIgBgLIAAgKIAHAAIAAAKIgBALg");
	this.shape_392.setTransform(178.2,127.65);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_393.setTransform(175.175,131.575);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIAAAJIAAAYg");
	this.shape_394.setTransform(171.8,130.575);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_395.setTransform(168.8,129.825);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_396.setTransform(165.275,130.625);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_397.setTransform(160.575,130.675);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_398.setTransform(155.475,129.775);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_399.setTransform(150.7,130.575);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_400.setTransform(147.25,129.725);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_401.setTransform(141.35,130.625);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_402.setTransform(136.4,129.725);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_403.setTransform(132.75,129.825);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_404.setTransform(126.55,130.575);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_405.setTransform(121.6,130.625);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_406.setTransform(116.65,130.625);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_407.setTransform(111.825,129.775);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_408.setTransform(104.525,130.625);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_409.setTransform(99.825,130.625);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_410.setTransform(94.9,129.725);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_411.setTransform(86.25,130.575);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_412.setTransform(80.025,130.675);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_413.setTransform(75.325,130.625);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_414.setTransform(70.775,131.475);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_415.setTransform(66.975,129.725);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_416.setTransform(59.55,130.575);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_417.setTransform(53.35,130.625);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_418.setTransform(49.75,130.575);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_419.setTransform(45.425,130.625);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_420.setTransform(40.675,129.725);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_421.setTransform(34.35,132.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_422.setTransform(30.925,131.575);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_423.setTransform(27.55,130.575);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_424.setTransform(24.55,129.825);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_425.setTransform(21.025,130.625);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_426.setTransform(16.325,130.675);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_427.setTransform(11.225,129.775);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_428.setTransform(6.45,130.575);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_429.setTransform(3,129.725);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgBAEQgDAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_430.setTransform(354.9,122.075);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_431.setTransform(350.1,121.125);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_432.setTransform(346.65,120.275);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_433.setTransform(344.5,120.375);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_434.setTransform(342.05,120.375);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_435.setTransform(338.3,121.175);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_436.setTransform(333.575,121.175);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_437.setTransform(328.9,121.175);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_438.setTransform(324.075,122.025);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_439.setTransform(319.275,122.125);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_440.setTransform(315.85,120.375);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_441.setTransform(309.475,120.325);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_442.setTransform(304.7,121.125);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_443.setTransform(299.725,121.175);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQADADAFAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_444.setTransform(292.2,122.075);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_445.setTransform(287.4,121.125);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_446.setTransform(283.95,120.275);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_447.setTransform(281.8,120.375);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_448.setTransform(278.05,121.125);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_449.setTransform(274.6,120.275);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_450.setTransform(272.5,121.125);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_451.setTransform(268.325,122.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_452.setTransform(260.8,121.175);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_453.setTransform(255.85,120.275);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIACAHIgHABIgFgBg");
	this.shape_454.setTransform(252.2,120.375);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_455.setTransform(247.45,120.225);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_456.setTransform(243.525,121.175);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_457.setTransform(237.45,120.375);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAMAXIgJgOIgDgEIgMASIgJAAIARgXIgQgWIAKAAIAHALIADAFIAEgFIAHgLIAKAAIgRAWIASAXg");
	this.shape_458.setTransform(234,121.175);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_459.setTransform(229.3,121.175);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIACAHIgHABIgFgBg");
	this.shape_460.setTransform(225.65,120.375);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_461.setTransform(219.725,122.125);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgEAAgDACQgCABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQABgEAEgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEAAAIIAAAfg");
	this.shape_462.setTransform(213.75,121.125);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_463.setTransform(206.3,121.125);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_464.setTransform(200.075,121.225);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_465.setTransform(194.975,120.325);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_466.setTransform(188.025,122.125);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_467.setTransform(184.775,120.275);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_468.setTransform(181.475,122.025);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_469.setTransform(175.15,121.125);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_470.setTransform(170.45,120.275);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_471.setTransform(167.225,121.175);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_472.setTransform(160.325,121.175);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_473.setTransform(157.15,120.275);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_474.setTransform(150,121.125);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_475.setTransform(143.775,121.225);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_476.setTransform(139.075,121.175);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_477.setTransform(134.525,122.025);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_478.setTransform(130.725,120.275);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgEAAgDACQgCABgCAEIAAAJIAAAYIgIAAIAAguIAHAAIAAAHQABgEAEgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEAAAIIAAAfg");
	this.shape_479.setTransform(123.3,121.125);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_480.setTransform(117.1,121.175);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_481.setTransform(113.5,121.125);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_482.setTransform(109.175,121.175);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_483.setTransform(104.425,120.275);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_484.setTransform(100.55,123.05);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAIAAIAAAHQABgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_485.setTransform(95.6,121.125);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_486.setTransform(89.375,121.225);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_487.setTransform(84.675,121.175);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_488.setTransform(80.125,122.025);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_489.setTransform(76.325,120.275);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgCAJIAAAYIgHAAIAAguIAGAAIAAAHQACgEAEgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAKAAQAGAAAEAEQAEAEAAAIIAAAfg");
	this.shape_490.setTransform(68.9,121.125);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_491.setTransform(62.7,121.175);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_492.setTransform(59.1,121.125);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_493.setTransform(54.775,121.175);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_494.setTransform(50.025,120.275);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgHAAIAAgGIAHAAIAAgFIAAgHIAEgFQACgCAFAAIAIABIgBAHIgFgBQgEAAgBACQgCACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_495.setTransform(43.9,120.225);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_496.setTransform(39.975,121.175);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_497.setTransform(32.825,121.175);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_498.setTransform(28.15,121.125);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_499.setTransform(23.175,121.175);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_500.setTransform(19.75,120.275);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_501.setTransform(16.525,121.175);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_502.setTransform(13.2,121.125);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_503.setTransform(8.9,121.175);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIAKgbIAIAAIgRAtg");
	this.shape_504.setTransform(4.25,121.175);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgDAFAAAIQAAAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgDgEgGAAQgEAAgEAEg");
	this.shape_505.setTransform(369.85,112.625);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_506.setTransform(365.05,111.675);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_507.setTransform(361.6,110.825);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_508.setTransform(357.975,110.875);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_509.setTransform(353.175,111.775);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_510.setTransform(349.725,110.825);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_511.setTransform(346.675,111.725);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_512.setTransform(341.85,111.675);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_513.setTransform(338.4,110.825);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_514.setTransform(333.85,111.675);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_515.setTransform(329.55,111.725);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_516.setTransform(325.125,110.825);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_517.setTransform(320.125,111.725);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AAXAgIAAg1IgTA1IgHAAIgSg2IAAA2IgJAAIAAg/IANAAIAQAsIACAKIADgKIAPgsIAMAAIAAA/g");
	this.shape_518.setTransform(313.925,110.825);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_519.setTransform(307.75,111.725);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHABgIQAAgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAIAAIAAAnQgBALgCAEQgCAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFAAAIQAAAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_520.setTransform(302.65,112.625);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_521.setTransform(297.825,111.725);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgYAgIAAg/IAYAAIAJAAQAFABADACQADADADAEQACAEAAAEQAAAJgGAEQgFAGgOAAIgPAAIAAAagAgPgBIAPAAQAJAAADgDQAEgDAAgFQAAgEgCgDQgDgDgDgBIgIgBIgPAAg");
	this.shape_522.setTransform(292.55,110.825);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_523.setTransform(284.725,111.725);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_524.setTransform(280.025,111.775);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_525.setTransform(274.925,110.875);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_526.setTransform(271.625,110.825);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AAUAgIgHgTIgaAAIgHATIgJAAIAYg/IAJAAIAaA/gAgEgMIgGASIAUAAIgHgRIgDgNIgEAMg");
	this.shape_527.setTransform(267.7,110.825);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_528.setTransform(259.8,111.725);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_529.setTransform(255.375,110.825);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_530.setTransform(251.9,110.825);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_531.setTransform(249.925,110.825);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_532.setTransform(244.05,111.725);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_533.setTransform(240.45,111.675);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_534.setTransform(236.125,111.725);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgIAjIgJAAIgOgtIAIAAIAHAaIADAKIADgKIAHgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_535.setTransform(230.45,111.725);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_536.setTransform(226.05,110.925);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgIAAIAAgGIAIAAIAAgFIAAgHIAEgFQACgCAFAAIAHABIAAAHIgFgBQgEAAgBACQgCACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_537.setTransform(223.75,110.775);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_538.setTransform(219.825,111.725);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_539.setTransform(215.125,111.725);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgDAFAAAIQAAAJADADQAEAFAEAAQAGAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_540.setTransform(207.85,112.625);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_541.setTransform(203.05,111.675);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_542.setTransform(199.6,110.825);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_543.setTransform(196.15,110.825);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_544.setTransform(191.425,111.725);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_545.setTransform(188.25,110.825);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_546.setTransform(186.275,110.825);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_547.setTransform(182.975,110.875);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_548.setTransform(177.875,111.775);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_549.setTransform(173.075,112.575);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_550.setTransform(165.675,112.575);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_551.setTransform(160.575,111.725);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_552.setTransform(156.95,110.925);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_553.setTransform(153.725,110.825);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_554.setTransform(148.975,111.725);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_555.setTransform(144.3,111.725);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_556.setTransform(139.175,110.875);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACADADQABAEAAAGIAAAdg");
	this.shape_557.setTransform(131.95,110.825);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_558.setTransform(128.3,110.925);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_559.setTransform(126.05,110.825);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgJAjIgIAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_560.setTransform(121.85,111.725);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_561.setTransform(113.975,112.675);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_562.setTransform(110.725,110.825);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_563.setTransform(108.6,110.925);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_564.setTransform(104.85,111.675);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_565.setTransform(99.9,111.725);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_566.setTransform(95.325,111.725);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_567.setTransform(90.5,111.725);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQAEAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_568.setTransform(86.9,111.675);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_569.setTransform(80.15,111.725);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQADAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_570.setTransform(76.55,111.675);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_571.setTransform(72.225,111.725);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgEACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_572.setTransform(66.05,111.675);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_573.setTransform(57.225,110.875);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_574.setTransform(52.45,111.675);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_575.setTransform(47.475,111.725);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_576.setTransform(41.325,114.225);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_577.setTransform(37.875,111.725);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_578.setTransform(33.2,111.725);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHgBgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQABALgCAEQgDAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg");
	this.shape_579.setTransform(28.1,112.625);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_580.setTransform(23.275,111.725);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_581.setTransform(18.575,111.725);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_582.setTransform(14.125,111.725);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_583.setTransform(9.425,111.725);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_584.setTransform(4.625,112.575);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQADACABAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_585.setTransform(355.8,102.225);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_586.setTransform(349.575,102.325);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_587.setTransform(344.875,102.275);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_588.setTransform(340.325,103.125);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_589.setTransform(336.525,101.375);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_590.setTransform(329.1,102.225);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_591.setTransform(322.9,102.275);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_592.setTransform(319.3,102.225);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_593.setTransform(314.975,102.275);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_594.setTransform(310.225,101.375);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIABgKQgFAGgIAAQgJAAgFgHQgFgHgBgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_595.setTransform(302.5,103.175);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_596.setTransform(297.7,102.225);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_597.setTransform(294.25,101.375);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_598.setTransform(290.8,102.225);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_599.setTransform(287.35,101.375);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_600.setTransform(283.875,102.275);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_601.setTransform(280.25,101.475);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_602.setTransform(276.5,102.225);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_603.setTransform(271.525,102.275);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_604.setTransform(266.975,102.275);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_605.setTransform(259.925,102.275);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_606.setTransform(256.55,101.475);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_607.setTransform(252.8,102.275);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_608.setTransform(247.85,102.275);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_609.setTransform(242.9,101.375);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_610.setTransform(238.175,102.275);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_611.setTransform(232.35,101.475);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_612.setTransform(228.6,102.275);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_613.setTransform(223.875,102.275);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_614.setTransform(219.175,102.275);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQADAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_615.setTransform(215.6,102.225);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIACAHIgHABIgFgBg");
	this.shape_616.setTransform(212.6,101.475);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_617.setTransform(208.85,102.275);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_618.setTransform(204.075,101.375);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_619.setTransform(197.95,101.325);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_620.setTransform(194.025,102.275);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_621.setTransform(186.65,102.275);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_622.setTransform(181.925,102.275);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_623.setTransform(177.225,102.275);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_624.setTransform(172.3,102.275);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_625.setTransform(168.825,101.375);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_626.setTransform(165.4,102.275);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_627.setTransform(161.8,102.225);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_628.setTransform(155.05,102.275);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_629.setTransform(150.1,101.375);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_630.setTransform(146.45,101.475);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_631.setTransform(140.25,101.375);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIADAAIADAAIACAHIgGABIgHgBg");
	this.shape_632.setTransform(136.6,101.475);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_633.setTransform(134.35,101.375);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_634.setTransform(130.15,102.275);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_635.setTransform(122.225,102.275);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQADAEABAGIABAOQAAALgCAHQgDAHgEAEQgEAEgIAAQgIAAgGgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_636.setTransform(117.5,101.425);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgQQAAgSAHgJQAGgHAJAAQAHAAAFAEQAFAFABAHIgIABQgBgFgCgCQgDgDgFAAQgDAAgCACQgEACgCAGQgCAFAAAKQACgFAEgCQAFgCADAAQAIAAAGAGQAFAFAAAJQAAAGgCAFQgDAFgFADQgEADgGAAQgJAAgGgHgAgIABQgDAEAAAGIABAIQACADADACQADACADAAQAFAAADgEQAEgEAAgHQAAgGgDgEQgEgDgFAAQgFAAgEADg");
	this.shape_637.setTransform(112.575,101.425);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDIADgHIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_638.setTransform(107.625,101.425);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_639.setTransform(102.375,101.375);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_640.setTransform(95.3,102.275);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_641.setTransform(90.35,101.375);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_642.setTransform(86.7,101.475);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_643.setTransform(80.5,102.225);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_644.setTransform(77.05,101.375);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_645.setTransform(70.975,101.425);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_646.setTransform(66.2,102.275);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_647.setTransform(61.475,102.275);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_648.setTransform(58.3,101.375);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_649.setTransform(56.2,102.225);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_650.setTransform(51.875,102.275);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_651.setTransform(48.425,101.375);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_652.setTransform(44.975,102.325);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_653.setTransform(40.175,103.125);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_654.setTransform(35.075,102.275);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_655.setTransform(30.275,103.125);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_656.setTransform(22.975,102.275);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_657.setTransform(18.275,102.275);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgJAjIgIAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_658.setTransform(12.6,102.275);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_659.setTransform(5.75,101.475);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_660.setTransform(3.275,101.375);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_661.setTransform(381.25,94.7);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_662.setTransform(377.375,91.975);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_663.setTransform(372.6,92.825);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgBAEQgDAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_664.setTransform(367.5,93.725);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_665.setTransform(362.7,92.775);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_666.setTransform(357.725,92.825);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACABADQACAEAAAGIAAAdg");
	this.shape_667.setTransform(352.8,91.925);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_668.setTransform(348.225,92.825);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_669.setTransform(343.4,92.775);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_670.setTransform(338.425,92.875);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_671.setTransform(331.325,93.775);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_672.setTransform(328.075,91.925);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_673.setTransform(326.125,91.925);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_674.setTransform(322.675,92.825);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_675.setTransform(319.25,91.925);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_676.setTransform(317.1,92.025);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_677.setTransform(313.35,92.775);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_678.setTransform(308.4,92.825);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_679.setTransform(303.675,92.825);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_680.setTransform(299.225,92.825);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_681.setTransform(294.55,92.825);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEACABQAEADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgDAEQgCAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_682.setTransform(287,93.725);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_683.setTransform(282.2,92.775);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_684.setTransform(278.75,91.925);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_685.setTransform(275.3,92.775);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_686.setTransform(271.85,91.925);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_687.setTransform(268.375,92.825);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_688.setTransform(262.2,92.775);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_689.setTransform(256,92.825);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_690.setTransform(252.4,92.775);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_691.setTransform(246.875,95.325);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIAAgKQgEAGgIAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgDgEgGAAQgEAAgEAEg");
	this.shape_692.setTransform(243.05,93.725);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_693.setTransform(238.25,92.775);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_694.setTransform(234.8,91.925);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_695.setTransform(232.65,92.025);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_696.setTransform(230.2,92.025);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_697.setTransform(226.45,92.825);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_698.setTransform(221.725,92.825);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_699.setTransform(217.05,92.825);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_700.setTransform(212.225,93.675);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_701.setTransform(207.425,93.775);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_702.setTransform(204,92.025);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_703.setTransform(198.175,92.825);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_704.setTransform(194.85,91.925);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_705.setTransform(191.4,92.775);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_706.setTransform(186.425,92.825);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_707.setTransform(182.85,92.775);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_708.setTransform(179.85,92.025);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_709.setTransform(176.475,92.825);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_710.setTransform(171.65,92.825);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_711.setTransform(168.175,91.925);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_712.setTransform(164.75,92.825);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_713.setTransform(157.325,92.825);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_714.setTransform(153.7,92.025);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_715.setTransform(149.95,92.775);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_716.setTransform(146.5,91.925);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_717.setTransform(140.725,93.675);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_718.setTransform(135.625,92.825);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_719.setTransform(130.7,92.825);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_720.setTransform(127.225,91.925);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_721.setTransform(121.35,92.825);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_722.setTransform(116.4,91.925);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIADAAIADAAIACAHIgGABIgHgBg");
	this.shape_723.setTransform(112.75,92.025);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_724.setTransform(106.525,92.825);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_725.setTransform(101.825,92.825);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_726.setTransform(98.625,91.925);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_727.setTransform(95.175,92.825);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_728.setTransform(89.1,92.025);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_729.setTransform(85.325,92.875);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_730.setTransform(80.525,91.975);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_731.setTransform(74.225,95.325);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_732.setTransform(70.775,92.825);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_733.setTransform(66.1,92.825);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_734.setTransform(62.65,91.925);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_735.setTransform(60.55,92.775);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_736.setTransform(56.225,92.875);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_737.setTransform(52.6,92.025);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_738.setTransform(48.85,92.775);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_739.setTransform(43.9,92.825);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_740.setTransform(39.325,92.825);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_741.setTransform(32.05,92.825);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIAKgbIAIAAIgRAtg");
	this.shape_742.setTransform(27.4,92.825);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_743.setTransform(24.2,91.925);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgGAAIAAgGIAGAAIAAgFIABgHIAEgFQACgCAFAAIAIABIgBAHIgFgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_744.setTransform(22.2,91.875);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_745.setTransform(16.125,93.775);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_746.setTransform(12.875,91.925);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_747.setTransform(9.45,92.775);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_748.setTransform(4.475,92.825);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_749.setTransform(374.95,82.575);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_750.setTransform(371.175,83.375);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_751.setTransform(366.25,83.325);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_752.setTransform(358.675,82.525);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgOASQgGgGgBgMQABgKAGgHQAGgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_753.setTransform(353.9,83.375);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIALgbIAHAAIgRAtg");
	this.shape_754.setTransform(349.25,83.375);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_755.setTransform(346.05,82.475);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIALgbIAIAAIgSAtg");
	this.shape_756.setTransform(342.9,83.375);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_757.setTransform(339.55,83.325);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_758.setTransform(335.225,83.425);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_759.setTransform(330.525,83.375);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_760.setTransform(323.625,83.375);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_761.setTransform(318.925,83.375);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_762.setTransform(314,82.475);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_763.setTransform(307.9,82.575);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_764.setTransform(305.425,82.475);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_765.setTransform(300.5,85.25);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_766.setTransform(297.325,82.475);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_767.setTransform(292.325,83.375);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_768.setTransform(287.375,83.375);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_769.setTransform(282.575,82.525);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_770.setTransform(275.05,83.325);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_771.setTransform(270.1,83.375);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_772.setTransform(263.9,83.325);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_773.setTransform(259.2,82.475);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_774.setTransform(256.125,83.375);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_775.setTransform(251.3,83.375);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_776.setTransform(246.475,84.225);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_777.setTransform(241.625,83.375);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_778.setTransform(234.5,83.375);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_779.setTransform(229.675,84.225);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_780.setTransform(224.875,84.325);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_781.setTransform(221.45,82.575);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_782.setTransform(215.225,83.375);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_783.setTransform(207.85,83.375);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_784.setTransform(203.425,82.475);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_785.setTransform(198.425,83.375);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_786.setTransform(192.25,83.325);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_787.setTransform(183.575,83.375);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_788.setTransform(179.95,82.575);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_789.setTransform(175.05,82.575);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_790.setTransform(172.8,82.475);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_791.setTransform(166.725,82.525);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_792.setTransform(161.95,83.375);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_793.setTransform(158.475,82.475);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_794.setTransform(155.175,82.525);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgEACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_795.setTransform(148.85,83.325);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_796.setTransform(142.625,83.375);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAFAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_797.setTransform(139.05,83.325);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_798.setTransform(135.125,83.375);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_799.setTransform(130.525,83.375);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_800.setTransform(123.225,82.525);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_801.setTransform(118.45,83.325);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_802.setTransform(113.475,83.375);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_803.setTransform(106.1,83.375);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_804.setTransform(101.275,84.225);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_805.setTransform(96.475,84.325);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_806.setTransform(93.05,82.575);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgIAAIAAgGIAIAAIAAgFIAAgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgBACQgCACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_807.setTransform(88.3,82.425);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_808.setTransform(84.375,83.375);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_809.setTransform(77.275,84.325);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_810.setTransform(72.55,83.375);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_811.setTransform(69.075,82.475);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_812.setTransform(67.125,82.475);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_813.setTransform(63.675,83.375);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgEAGgIAAQgJAAgFgHQgFgHgBgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgFACgHAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_814.setTransform(58.6,84.275);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_815.setTransform(51.325,83.375);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_816.setTransform(44.475,82.475);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_817.setTransform(39.475,83.375);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_818.setTransform(34.525,83.375);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_819.setTransform(30.9,82.575);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_820.setTransform(26.05,83.325);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_821.setTransform(21.75,83.375);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_822.setTransform(18.1,82.575);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_823.setTransform(14.35,83.325);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_824.setTransform(10.9,82.475);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_825.setTransform(8.8,83.325);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_826.setTransform(4.625,84.225);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_827.setTransform(363.8,73.875);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgJAjIgIAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_828.setTransform(358.1,73.925);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_829.setTransform(352.375,73.925);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_830.setTransform(347.45,73.875);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_831.setTransform(343.025,73.025);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_832.setTransform(338.05,73.875);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_833.setTransform(333.075,73.975);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_834.setTransform(325.7,73.875);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_835.setTransform(320.725,73.925);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_836.setTransform(313.35,73.875);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_837.setTransform(308.4,73.925);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgDAAgCACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_838.setTransform(303.45,73.025);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIADgKIAHgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_839.setTransform(297.75,73.925);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_840.setTransform(290.825,76.425);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_841.setTransform(287.375,73.925);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKACgHQADgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQACAEACAGIABAOQAAALgCAHQgDAHgEAEQgEAEgIAAQgIAAgGgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_842.setTransform(282.65,73.075);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQADAEABAGIABAOQAAALgCAHQgDAHgEAEQgEAEgIAAQgIAAgGgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_843.setTransform(277.7,73.075);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgBgJIAJAAQABAGAEADQACADAFAAQAFAAAEgEQAEgFAAgHQAAgHgDgDQgFgDgFAAQgEAAgCABQgDACgDACIgHgBIAGggIAgAAIAAAHIgZAAIgEASQAGgEAGAAQAIAAAFAFQAHAFgBAJQABAJgGAHQgGAHgKAAQgIAAgGgFg");
	this.shape_844.setTransform(272.8,73.125);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_845.setTransform(267.525,73.025);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_846.setTransform(260.45,73.925);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_847.setTransform(255.5,73.025);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_848.setTransform(251.85,73.125);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_849.setTransform(245.65,73.925);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_850.setTransform(241.075,73.925);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_851.setTransform(236.25,73.875);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_852.setTransform(232.8,73.025);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_853.setTransform(229.575,73.925);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_854.setTransform(223.8,73.875);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_855.setTransform(219.5,73.925);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIAKgbIAIAAIgRAtg");
	this.shape_856.setTransform(214.85,73.925);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_857.setTransform(210.15,73.925);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_858.setTransform(204.05,73.125);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FFFFFF").s().p("AAMAXIgJgOIgDgEIgMASIgJAAIARgXIgQgWIAKAAIAHALIADAFIAEgFIAHgLIAKAAIgQAWIARAXg");
	this.shape_859.setTransform(200.6,73.925);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_860.setTransform(195.9,73.925);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_861.setTransform(192.25,73.125);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_862.setTransform(186.325,74.875);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgEACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_863.setTransform(180.35,73.875);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_864.setTransform(172.9,73.875);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_865.setTransform(166.675,73.975);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_866.setTransform(161.575,73.075);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_867.setTransform(154.175,73.075);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAFAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIAAAJIAAAYg");
	this.shape_868.setTransform(150.75,73.875);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_869.setTransform(146.425,73.925);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_870.setTransform(141.325,73.075);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_871.setTransform(136.55,73.875);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_872.setTransform(131.575,73.925);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_873.setTransform(127.95,73.125);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_874.setTransform(124.425,73.925);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_875.setTransform(117.525,73.925);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FFFFFF").s().p("AgCALIgCgLIAAgKIAIAAIAAAKIgBALg");
	this.shape_876.setTransform(114.5,70.95);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_877.setTransform(111.475,74.875);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_878.setTransform(108.1,73.875);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIADAAIADAAIACAHIgGABIgHgBg");
	this.shape_879.setTransform(105.1,73.125);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_880.setTransform(101.575,73.925);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_881.setTransform(96.875,73.975);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_882.setTransform(91.775,73.075);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_883.setTransform(87,73.875);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_884.setTransform(83.55,73.025);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_885.setTransform(77.65,73.925);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_886.setTransform(72.7,73.025);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_887.setTransform(69.05,73.125);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_888.setTransform(62.85,73.875);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_889.setTransform(57.9,73.925);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_890.setTransform(52.95,73.925);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_891.setTransform(48.125,73.075);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_892.setTransform(40.825,73.925);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_893.setTransform(36.125,73.925);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_894.setTransform(31.2,73.025);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgCAJIAAAYIgHAAIAAguIAGAAIAAAHQACgEAEgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_895.setTransform(22.55,73.875);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_896.setTransform(16.325,73.975);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_897.setTransform(11.625,73.925);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_898.setTransform(7.075,74.775);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_899.setTransform(3.275,73.025);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgEAAgDACQgCABgCAEIAAAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEAAAIIAAAfg");
	this.shape_900.setTransform(372.15,64.425);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_901.setTransform(365.95,64.475);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_902.setTransform(362.35,64.425);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_903.setTransform(358.025,64.475);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_904.setTransform(353.275,63.575);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAHAAIAAAIg");
	this.shape_905.setTransform(346.95,66.35);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_906.setTransform(343.525,65.425);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_907.setTransform(340.15,64.425);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_908.setTransform(337.15,63.675);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_909.setTransform(333.625,64.475);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_910.setTransform(328.925,64.525);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_911.setTransform(323.825,63.625);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_912.setTransform(319.05,64.425);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_913.setTransform(315.6,63.575);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQADADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgDAFAAAIQAAAJADADQAEAFAFAAQAFAAADgEQAEgEAAgJQAAgIgEgFQgDgEgGAAQgEAAgEAEg");
	this.shape_914.setTransform(309.55,65.375);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_915.setTransform(304.75,64.425);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_916.setTransform(301.3,63.575);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_917.setTransform(299.15,63.675);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgHgBg");
	this.shape_918.setTransform(296.7,63.675);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_919.setTransform(292.95,64.475);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_920.setTransform(288.225,64.475);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_921.setTransform(283.55,64.475);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_922.setTransform(278.725,65.325);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_923.setTransform(273.925,65.425);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_924.setTransform(270.5,63.675);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_925.setTransform(264.125,63.625);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_926.setTransform(259.35,64.425);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_927.setTransform(254.375,64.475);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEACABQAEADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHABgIQAAgHACgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAIAAIAAAnQgBALgCAEQgCAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFAAAIQAAAJADADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_928.setTransform(246.85,65.375);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_929.setTransform(242.05,64.425);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_930.setTransform(238.6,63.575);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_931.setTransform(236.45,63.675);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_932.setTransform(232.7,64.425);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_933.setTransform(229.25,63.575);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_934.setTransform(227.15,64.425);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_935.setTransform(222.975,65.325);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_936.setTransform(215.45,64.475);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_937.setTransform(210.5,63.575);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_938.setTransform(206.85,63.675);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgGAAIAAgGIAGAAIAAgFIABgHIAEgFQACgCAFAAIAIABIgCAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_939.setTransform(202.1,63.525);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_940.setTransform(198.175,64.475);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_941.setTransform(192.1,63.675);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AAMAXIgJgOIgDgEIgMASIgJAAIARgXIgQgWIAKAAIAHALIADAFIAEgFIAHgLIAKAAIgRAWIASAXg");
	this.shape_942.setTransform(188.65,64.475);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_943.setTransform(183.95,64.475);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_944.setTransform(180.3,63.675);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_945.setTransform(174.375,65.425);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_946.setTransform(168.4,64.425);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_947.setTransform(160.95,64.425);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_948.setTransform(154.725,64.525);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_949.setTransform(149.625,63.625);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_950.setTransform(142.675,65.425);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_951.setTransform(139.425,63.575);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_952.setTransform(136.125,65.325);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_953.setTransform(129.8,64.425);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_954.setTransform(125.1,63.575);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_955.setTransform(121.875,64.475);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_956.setTransform(114.975,64.475);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_957.setTransform(111.8,63.575);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQADACABAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_958.setTransform(104.65,64.425);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_959.setTransform(98.425,64.525);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_960.setTransform(93.725,64.475);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_961.setTransform(89.175,65.325);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_962.setTransform(85.375,63.575);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_963.setTransform(77.95,64.425);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_964.setTransform(71.75,64.475);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_965.setTransform(68.15,64.425);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_966.setTransform(63.825,64.475);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_967.setTransform(59.075,63.575);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_968.setTransform(55.2,66.35);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_969.setTransform(50.25,64.425);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_970.setTransform(44.025,64.525);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_971.setTransform(39.325,64.475);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_972.setTransform(34.775,65.325);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_973.setTransform(30.975,63.575);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_974.setTransform(23.55,64.425);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_975.setTransform(17.35,64.475);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_976.setTransform(13.75,64.425);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_977.setTransform(9.425,64.475);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_978.setTransform(4.675,63.575);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_979.setTransform(373.8,54.075);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_980.setTransform(369.875,55.025);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_981.setTransform(362.725,55.025);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_982.setTransform(358.05,54.975);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_983.setTransform(353.075,55.025);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_984.setTransform(349.65,54.125);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_985.setTransform(346.425,55.025);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_986.setTransform(343.1,54.975);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_987.setTransform(338.8,55.025);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIALgbIAIAAIgSAtg");
	this.shape_988.setTransform(334.15,55.025);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQADADAFAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_989.setTransform(326.85,55.925);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_990.setTransform(322.05,54.975);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_991.setTransform(318.6,54.125);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_992.setTransform(314.975,54.175);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_993.setTransform(310.175,55.075);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_994.setTransform(306.725,54.125);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_995.setTransform(303.675,55.025);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_996.setTransform(298.85,54.975);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_997.setTransform(295.4,54.125);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_998.setTransform(290.85,54.975);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_999.setTransform(286.55,55.025);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1000.setTransform(282.125,54.125);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1001.setTransform(277.125,55.025);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AAXAgIAAg1IgTA1IgHAAIgSg2IAAA2IgJAAIAAg/IANAAIAQAsIACAKIADgKIAPgsIAMAAIAAA/g");
	this.shape_1002.setTransform(270.925,54.125);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1003.setTransform(264.75,55.025);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQADADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg");
	this.shape_1004.setTransform(259.65,55.925);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1005.setTransform(254.825,55.025);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgXAgIAAg/IAXAAIAJAAQAGABACACQADADADAEQABAEAAAEQABAJgGAEQgFAGgOAAIgPAAIAAAagAgPgBIAPAAQAJAAAEgDQADgDAAgFQAAgEgCgDQgDgDgDgBIgIgBIgPAAg");
	this.shape_1006.setTransform(249.55,54.125);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1007.setTransform(241.725,55.025);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1008.setTransform(237.025,55.075);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1009.setTransform(231.925,54.175);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1010.setTransform(228.625,54.125);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AAUAgIgHgTIgaAAIgHATIgJAAIAZg/IAIAAIAaA/gAgDgMIgHASIAUAAIgGgRIgEgNIgDAMg");
	this.shape_1011.setTransform(224.7,54.125);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1012.setTransform(216.8,55.025);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1013.setTransform(212.375,54.125);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1014.setTransform(208.9,54.125);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1015.setTransform(206.925,54.125);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1016.setTransform(201.05,55.025);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIAAAJIAAAYg");
	this.shape_1017.setTransform(197.45,54.975);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1018.setTransform(193.125,55.025);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgJAjIgIAAIgOgtIAIAAIAHAaIADAKIADgKIAHgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_1019.setTransform(187.45,55.025);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1020.setTransform(183.05,54.225);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_1021.setTransform(180.75,54.075);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1022.setTransform(176.825,55.025);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1023.setTransform(172.125,55.025);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQADADAFAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_1024.setTransform(164.85,55.925);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_1025.setTransform(160.05,54.975);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1026.setTransform(156.6,54.125);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_1027.setTransform(153.15,54.125);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1028.setTransform(148.425,55.025);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1029.setTransform(145.25,54.125);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1030.setTransform(143.275,54.125);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_1031.setTransform(139.975,54.175);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1032.setTransform(134.875,55.075);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1033.setTransform(130.075,55.875);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1034.setTransform(122.675,55.875);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1035.setTransform(117.575,55.025);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCABgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1036.setTransform(113.95,54.225);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1037.setTransform(110.725,54.125);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1038.setTransform(105.975,55.025);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1039.setTransform(101.3,55.025);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1040.setTransform(96.175,54.175);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_1041.setTransform(88.95,54.125);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1042.setTransform(85.3,54.225);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1043.setTransform(83.05,54.125);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_1044.setTransform(78.85,55.025);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1045.setTransform(70.975,55.975);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1046.setTransform(67.725,54.125);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1047.setTransform(65.6,54.225);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1048.setTransform(61.85,54.975);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1049.setTransform(56.9,55.025);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1050.setTransform(52.325,55.025);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1051.setTransform(47.5,55.025);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_1052.setTransform(43.9,54.975);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1053.setTransform(37.15,55.025);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_1054.setTransform(33.55,54.975);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1055.setTransform(29.225,55.025);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_1056.setTransform(23.05,54.975);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1057.setTransform(14.225,54.175);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1058.setTransform(9.45,54.975);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1059.setTransform(4.475,55.025);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_1060.setTransform(375.625,48.075);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1061.setTransform(372.175,45.575);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1062.setTransform(367.5,45.575);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQADADAFAAQAFAAADgDQADgCABgEIABgKQgFAGgIAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgEgEgFAAQgEAAgEAEg");
	this.shape_1063.setTransform(362.4,46.475);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1064.setTransform(357.575,45.575);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1065.setTransform(352.875,45.575);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1066.setTransform(348.425,45.575);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1067.setTransform(343.725,45.575);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1068.setTransform(338.925,46.425);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_1069.setTransform(330.15,45.525);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1070.setTransform(323.925,45.625);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1071.setTransform(319.225,45.575);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1072.setTransform(314.675,46.425);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1073.setTransform(310.875,44.675);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_1074.setTransform(303.45,45.525);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1075.setTransform(297.25,45.575);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_1076.setTransform(293.65,45.525);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1077.setTransform(289.325,45.575);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_1078.setTransform(284.575,44.675);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIABgKQgFAGgIAAQgJAAgFgHQgFgHgBgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_1079.setTransform(276.85,46.475);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1080.setTransform(272.05,45.525);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1081.setTransform(268.6,44.675);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1082.setTransform(265.15,45.525);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1083.setTransform(261.7,44.675);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1084.setTransform(258.225,45.575);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1085.setTransform(254.6,44.775);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1086.setTransform(250.85,45.525);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1087.setTransform(245.875,45.575);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1088.setTransform(241.325,45.575);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1089.setTransform(234.275,45.575);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1090.setTransform(230.9,44.775);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1091.setTransform(227.15,45.575);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1092.setTransform(222.2,45.575);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_1093.setTransform(217.25,44.675);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1094.setTransform(212.525,45.575);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1095.setTransform(206.7,44.775);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1096.setTransform(202.95,45.575);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1097.setTransform(198.225,45.575);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1098.setTransform(193.525,45.575);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQADAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_1099.setTransform(189.95,45.525);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_1100.setTransform(186.95,44.775);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1101.setTransform(183.2,45.575);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_1102.setTransform(178.425,44.675);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_1103.setTransform(172.3,44.625);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1104.setTransform(168.375,45.575);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1105.setTransform(161,45.575);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1106.setTransform(156.275,45.575);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1107.setTransform(151.575,45.575);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1108.setTransform(146.65,45.575);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1109.setTransform(143.175,44.675);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1110.setTransform(139.75,45.575);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_1111.setTransform(136.15,45.525);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1112.setTransform(129.4,45.575);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_1113.setTransform(124.45,44.675);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_1114.setTransform(120.8,44.775);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_1115.setTransform(114.6,44.675);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1116.setTransform(110.95,44.775);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1117.setTransform(108.7,44.675);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_1118.setTransform(104.5,45.575);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1119.setTransform(96.575,45.575);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQADAEABAGIABAOQAAALgCAHQgDAHgEAEQgEAEgIAAQgIAAgGgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_1120.setTransform(91.85,44.725);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgQQAAgSAHgJQAGgHAJAAQAHAAAFAEQAFAFABAHIgIABQgBgFgCgCQgDgDgFAAQgDAAgCACQgEACgCAGQgCAFAAAKQACgFAEgCQAFgCADAAQAIAAAGAGQAFAFAAAJQAAAGgCAFQgDAFgFADQgEADgGAAQgJAAgGgHgAgIABQgDAEAAAGIABAIQACADADACQADACADAAQAFAAADgEQAEgEAAgHQAAgGgDgEQgEgDgFAAQgFAAgEADg");
	this.shape_1121.setTransform(86.925,44.725);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FFFFFF").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDIADgHIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_1122.setTransform(81.975,44.725);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_1123.setTransform(76.725,44.675);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1124.setTransform(69.65,45.575);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_1125.setTransform(64.7,44.675);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_1126.setTransform(61.05,44.775);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_1127.setTransform(54.85,45.525);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1128.setTransform(51.4,44.675);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1129.setTransform(45.325,44.725);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1130.setTransform(40.55,45.575);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1131.setTransform(35.825,45.575);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1132.setTransform(32.65,44.675);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_1133.setTransform(30.55,45.525);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1134.setTransform(26.225,45.575);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1135.setTransform(22.775,44.675);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1136.setTransform(19.325,45.625);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1137.setTransform(14.525,46.425);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1138.setTransform(9.425,45.575);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1139.setTransform(4.625,46.425);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1140.setTransform(370.925,36.125);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1141.setTransform(366.225,36.125);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgIAjIgJAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIACAJIADgJIAIgaIAIAAIgPAtg");
	this.shape_1142.setTransform(360.55,36.125);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1143.setTransform(353.7,35.325);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1144.setTransform(351.225,35.225);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_1145.setTransform(346.3,38);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1146.setTransform(342.425,35.275);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1147.setTransform(337.65,36.125);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQADADAEAAQAFAAADgDQADgCABgEIABgKQgFAGgIAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg");
	this.shape_1148.setTransform(332.55,37.025);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1149.setTransform(327.75,36.075);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1150.setTransform(322.775,36.125);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgEACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACACADQACAEAAAGIAAAdg");
	this.shape_1151.setTransform(317.85,35.225);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1152.setTransform(313.275,36.125);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1153.setTransform(308.45,36.075);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1154.setTransform(303.475,36.175);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1155.setTransform(296.375,37.075);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1156.setTransform(293.125,35.225);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1157.setTransform(291.175,35.225);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1158.setTransform(287.725,36.125);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1159.setTransform(284.3,35.225);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1160.setTransform(282.15,35.325);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_1161.setTransform(278.4,36.075);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1162.setTransform(273.45,36.125);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1163.setTransform(268.725,36.125);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1164.setTransform(264.275,36.125);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1165.setTransform(259.6,36.125);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEACABQAEADAEAAQAFAAADgDQADgCABgEIAAgKQgEAGgIAAQgJAAgGgHQgEgHAAgIQgBgHADgGQACgFAFgDQAFgDAFAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgCAEQgCAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFABAIQgBAJAEADQAEAFAEAAQAGAAADgEQAEgEAAgJQAAgIgEgFQgDgEgGAAQgEAAgEAEg");
	this.shape_1166.setTransform(252.05,37.025);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1167.setTransform(247.25,36.075);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1168.setTransform(243.8,35.225);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1169.setTransform(240.35,36.075);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1170.setTransform(236.9,35.225);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1171.setTransform(233.425,36.125);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgEAAgDACQgCABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQABgEAEgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEAAAIIAAAfg");
	this.shape_1172.setTransform(227.25,36.075);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1173.setTransform(221.05,36.125);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAEAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_1174.setTransform(217.45,36.075);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_1175.setTransform(211.925,38.625);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgFgHQgFgHgBgIQAAgHADgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQABALgCAEQgDAFgFADQgEACgHAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg");
	this.shape_1176.setTransform(208.1,37.025);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_1177.setTransform(203.3,36.075);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1178.setTransform(199.85,35.225);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1179.setTransform(197.7,35.325);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1180.setTransform(195.25,35.325);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1181.setTransform(191.5,36.125);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1182.setTransform(186.775,36.125);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1183.setTransform(182.1,36.125);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1184.setTransform(177.275,36.975);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1185.setTransform(172.475,37.075);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_1186.setTransform(169.05,35.325);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1187.setTransform(163.225,36.125);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1188.setTransform(159.9,35.225);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1189.setTransform(156.45,36.075);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1190.setTransform(151.475,36.125);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_1191.setTransform(147.9,36.075);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1192.setTransform(144.9,35.325);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1193.setTransform(141.525,36.125);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1194.setTransform(136.7,36.125);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1195.setTransform(133.225,35.225);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1196.setTransform(129.8,36.125);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1197.setTransform(122.375,36.125);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1198.setTransform(118.75,35.325);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1199.setTransform(115,36.075);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1200.setTransform(111.55,35.225);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1201.setTransform(105.775,36.975);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1202.setTransform(100.675,36.125);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAFAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1203.setTransform(95.75,36.125);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1204.setTransform(92.275,35.225);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1205.setTransform(86.4,36.125);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgCAAgDACQgDACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACABADQACAEAAAGIAAAdg");
	this.shape_1206.setTransform(81.45,35.225);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1207.setTransform(77.8,35.325);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1208.setTransform(71.575,36.125);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1209.setTransform(66.875,36.125);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1210.setTransform(63.675,35.225);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1211.setTransform(60.225,36.125);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1212.setTransform(54.15,35.325);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1213.setTransform(50.375,36.175);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_1214.setTransform(45.575,35.275);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_1215.setTransform(39.275,38.625);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1216.setTransform(35.825,36.125);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1217.setTransform(31.15,36.125);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1218.setTransform(27.7,35.225);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_1219.setTransform(25.6,36.075);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1220.setTransform(21.275,36.175);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCABgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1221.setTransform(17.65,35.325);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1222.setTransform(13.9,36.075);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1223.setTransform(8.95,36.125);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1224.setTransform(4.375,36.125);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1225.setTransform(354.35,26.675);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIALgbIAHAAIgRAtg");
	this.shape_1226.setTransform(349.7,26.675);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1227.setTransform(346.5,25.775);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgHAAIAAgGIAHAAIAAgFIAAgHIAEgFQACgCAFAAIAIABIgBAHIgFgBQgEAAgBACQgCACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_1228.setTransform(344.5,25.725);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1229.setTransform(338.425,27.625);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1230.setTransform(335.175,25.775);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1231.setTransform(331.75,26.625);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1232.setTransform(326.775,26.675);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_1233.setTransform(320.7,25.875);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1234.setTransform(316.925,26.675);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1235.setTransform(312,26.625);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1236.setTransform(304.425,25.825);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1237.setTransform(299.65,26.675);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FFFFFF").s().p("AgCAXIgSgtIAIAAIAKAbIACAJIADgJIALgbIAIAAIgSAtg");
	this.shape_1238.setTransform(295,26.675);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1239.setTransform(291.8,25.775);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FFFFFF").s().p("AgDAXIgSgtIAJAAIAKAbIACAJIADgJIAKgbIAIAAIgRAtg");
	this.shape_1240.setTransform(288.65,26.675);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAFAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIAAAJIAAAYg");
	this.shape_1241.setTransform(285.3,26.625);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1242.setTransform(280.975,26.725);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1243.setTransform(276.275,26.675);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1244.setTransform(269.375,26.675);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1245.setTransform(264.675,26.675);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAFgGAIAAQAFAAAEACQADACADADQABAEAAAGIAAAdg");
	this.shape_1246.setTransform(259.75,25.775);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_1247.setTransform(253.65,25.875);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1248.setTransform(251.175,25.775);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_1249.setTransform(246.25,28.55);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1250.setTransform(243.075,25.775);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1251.setTransform(238.075,26.675);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1252.setTransform(233.125,26.675);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_1253.setTransform(228.325,25.825);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_1254.setTransform(220.8,26.625);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1255.setTransform(215.85,26.675);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQADgEAEgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_1256.setTransform(209.65,26.625);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1257.setTransform(204.95,25.775);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1258.setTransform(201.875,26.675);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1259.setTransform(197.05,26.675);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1260.setTransform(192.225,27.525);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1261.setTransform(187.375,26.675);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1262.setTransform(180.25,26.675);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1263.setTransform(175.425,27.525);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1264.setTransform(170.625,27.625);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1265.setTransform(167.2,25.875);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1266.setTransform(160.975,26.675);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1267.setTransform(153.6,26.675);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1268.setTransform(149.175,25.775);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1269.setTransform(144.175,26.675);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_1270.setTransform(138,26.625);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1271.setTransform(129.325,26.675);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1272.setTransform(125.7,25.875);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_1273.setTransform(120.8,25.875);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1274.setTransform(118.55,25.775);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1275.setTransform(112.475,25.825);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1276.setTransform(107.7,26.675);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1277.setTransform(104.225,25.775);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_1278.setTransform(100.925,25.825);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIAAAJIAAAYIgJAAIAAguIAIAAIAAAHQABgEAFgCQADgCAEAAQAGAAADACQACACACAEQAGgIAJAAQAGAAAEAEQADAEAAAIIAAAfg");
	this.shape_1279.setTransform(94.6,26.625);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1280.setTransform(88.375,26.675);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_1281.setTransform(84.8,26.625);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1282.setTransform(80.875,26.675);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1283.setTransform(76.275,26.675);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1284.setTransform(68.975,25.825);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1285.setTransform(64.2,26.625);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1286.setTransform(59.225,26.675);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1287.setTransform(51.85,26.675);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1288.setTransform(47.025,27.525);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1289.setTransform(42.225,27.625);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCABgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1290.setTransform(38.8,25.875);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FFFFFF").s().p("AgGAhIAAgoIgHAAIAAgGIAHAAIAAgFIABgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgCACQgBACAAAEIAAAEIAJAAIAAAGIgJAAIAAAog");
	this.shape_1291.setTransform(34.05,25.725);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1292.setTransform(30.125,26.675);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1293.setTransform(23.025,27.625);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1294.setTransform(18.3,26.675);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1295.setTransform(14.825,25.775);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1296.setTransform(12.875,25.775);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1297.setTransform(9.425,26.675);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgBAEQgDAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_1298.setTransform(4.35,27.575);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1299.setTransform(374.525,17.225);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1300.setTransform(367.675,16.325);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1301.setTransform(362.675,17.225);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1302.setTransform(357.725,17.225);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1303.setTransform(354.1,16.425);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAFgCQADAAAEADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_1304.setTransform(349.25,17.175);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1305.setTransform(344.95,17.225);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_1306.setTransform(341.3,16.425);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1307.setTransform(337.55,17.175);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1308.setTransform(334.1,16.325);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIAAAJIAAAYg");
	this.shape_1309.setTransform(332,17.175);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1310.setTransform(327.825,18.075);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_1311.setTransform(320.3,17.175);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FFFFFF").s().p("AAJAXIgIgbIgBgIIgJAjIgIAAIgOgtIAIAAIAHAaIADAKIADgKIAHgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_1312.setTransform(314.6,17.225);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1313.setTransform(308.875,17.225);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1314.setTransform(303.95,17.175);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#FFFFFF").s().p("AAKAgIgPgYIgFAGIAAASIgIAAIAAg/IAIAAIAAAkIARgSIALAAIgSAQIATAdg");
	this.shape_1315.setTransform(299.525,16.325);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1316.setTransform(294.55,17.175);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1317.setTransform(289.575,17.275);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1318.setTransform(282.2,17.175);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1319.setTransform(277.225,17.225);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_1320.setTransform(269.85,17.175);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1321.setTransform(264.9,17.225);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_1322.setTransform(259.95,16.325);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#FFFFFF").s().p("AAJAXIgHgbIgCgIIgJAjIgIAAIgOgtIAIAAIAIAaIACAKIACgKIAIgaIAHAAIAHAaIADAJIACgJIAIgaIAIAAIgPAtg");
	this.shape_1323.setTransform(254.25,17.225);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_1324.setTransform(247.325,19.725);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1325.setTransform(243.875,17.225);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAEgEQAFgEAGAAQAFAAAFACQADACADAEIAEAKIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgFAGAAAPQAAAQAEAFQAEAFAEAAQAFAAAFgFQADgFAAgQQAAgPgDgFQgFgFgFAAQgEAAgDAEg");
	this.shape_1326.setTransform(239.15,16.375);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAEgEQAFgEAGAAQAFAAAFACQADACADAEIAEAKIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgFAGAAAPQAAAQAEAFQAEAFAEAAQAFAAAFgFQADgFAAgQQAAgPgDgFQgFgFgFAAQgEAAgDAEg");
	this.shape_1327.setTransform(234.2,16.375);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FFFFFF").s().p("AgOAbQgFgEgBgJIAIAAQABAGADADQAEADAEAAQAFAAAEgEQAEgFAAgHQAAgHgEgDQgDgDgGAAQgDAAgEABQgDACgBACIgIgBIAHggIAeAAIAAAHIgZAAIgDASQAGgEAFAAQAJAAAFAFQAGAFABAJQgBAJgFAHQgGAHgKAAQgIAAgGgFg");
	this.shape_1328.setTransform(229.3,16.425);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_1329.setTransform(224.025,16.325);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1330.setTransform(216.95,17.225);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgDgDQgCgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQADACADADQABAEAAAGIAAAdg");
	this.shape_1331.setTransform(212,16.325);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQAAgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1332.setTransform(208.35,16.425);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1333.setTransform(202.15,17.225);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1334.setTransform(197.575,17.225);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1335.setTransform(192.75,17.175);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1336.setTransform(189.3,16.325);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1337.setTransform(186.075,17.225);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAHAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgCADIgBAJIAAAYg");
	this.shape_1338.setTransform(180.3,17.175);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1339.setTransform(176,17.225);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FFFFFF").s().p("AgCAXIgTgtIAJAAIAKAbIACAJIADgJIALgbIAIAAIgSAtg");
	this.shape_1340.setTransform(171.35,17.225);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1341.setTransform(166.65,17.225);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1342.setTransform(160.55,16.425);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FFFFFF").s().p("AAMAXIgKgOIgCgEIgLASIgKAAIARgXIgPgWIAKAAIAHALIACAFIADgFIAIgLIAJAAIgPAWIARAXg");
	this.shape_1343.setTransform(157.1,17.225);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1344.setTransform(152.4,17.225);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1345.setTransform(148.75,16.425);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1346.setTransform(142.825,18.175);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgCACQgDABgBAEIgCAJIAAAYIgHAAIAAguIAGAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_1347.setTransform(136.85,17.175);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQADACABAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_1348.setTransform(129.4,17.175);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1349.setTransform(123.175,17.275);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1350.setTransform(118.075,16.375);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1351.setTransform(110.675,16.375);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_1352.setTransform(107.25,17.175);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1353.setTransform(102.925,17.225);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1354.setTransform(97.825,16.375);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIACAFIABAIIAAAcg");
	this.shape_1355.setTransform(93.05,17.175);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1356.setTransform(88.075,17.225);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgGABIgFgBg");
	this.shape_1357.setTransform(84.45,16.425);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1358.setTransform(80.925,17.225);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1359.setTransform(74.025,17.225);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FFFFFF").s().p("AgCALIgBgLIAAgKIAIAAIAAAKIgCALg");
	this.shape_1360.setTransform(71,14.25);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1361.setTransform(67.975,18.175);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_1362.setTransform(64.6,17.175);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1363.setTransform(61.6,16.425);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1364.setTransform(58.075,17.225);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1365.setTransform(53.375,17.275);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1366.setTransform(48.275,16.375);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg");
	this.shape_1367.setTransform(43.5,17.175);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1368.setTransform(40.05,16.325);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgIAAQgJAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1369.setTransform(34.15,17.225);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_1370.setTransform(29.2,16.325);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1371.setTransform(25.55,16.425);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1372.setTransform(19.35,17.175);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgiAAQAAAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1373.setTransform(14.4,17.225);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1374.setTransform(9.45,17.225);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#FFFFFF").s().p("AgMAaIAAAGIgHAAIAAhAIAIAAIAAAXQAFgGAGAAQAFAAAEACQADABADAEQACADACAEQABAEAAAFQAAAMgGAGQgGAHgIAAQgHAAgFgHgAgIgEQgEAEAAAIQAAAIACAEQAEAGAGAAQAEAAAEgEQAEgFAAgJQAAgIgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_1375.setTransform(4.625,16.375);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1376.setTransform(362.725,7.775);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1377.setTransform(358.025,7.775);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgDAAgDACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_1378.setTransform(353.1,6.875);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_1379.setTransform(344.45,7.725);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1380.setTransform(338.225,7.825);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1381.setTransform(333.525,7.775);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1382.setTransform(328.975,8.625);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1383.setTransform(325.175,6.875);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgCAJIAAAYIgHAAIAAguIAGAAIAAAHQACgEAEgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAKAAQAGAAAEAEQAEAEAAAIIAAAfg");
	this.shape_1384.setTransform(317.75,7.725);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1385.setTransform(311.55,7.775);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgBAJIAAAYg");
	this.shape_1386.setTransform(307.95,7.725);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1387.setTransform(303.625,7.775);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_1388.setTransform(298.875,6.875);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_1389.setTransform(292.55,9.65);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1390.setTransform(289.125,8.725);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAIAAIAAAHQACgFACgBIAEgCQAFAAAEADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABgBADIgBAJIAAAYg");
	this.shape_1391.setTransform(285.75,7.725);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FFFFFF").s().p("AAAAfIgDgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1392.setTransform(282.75,6.975);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1393.setTransform(279.225,7.775);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1394.setTransform(274.525,7.825);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1395.setTransform(269.425,6.925);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1396.setTransform(264.65,7.725);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1397.setTransform(261.2,6.875);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAHABQABAEADABQADADAEAAQAFAAADgDQADgCABgEIABgKQgGAGgHAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg");
	this.shape_1398.setTransform(255.15,8.675);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg");
	this.shape_1399.setTransform(250.35,7.725);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1400.setTransform(246.9,6.875);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg");
	this.shape_1401.setTransform(244.75,6.975);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFFFFF").s().p("AAAAfIgEgEQgBgCAAgHIAAgaIgGAAIAAgGIAGAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIABAHIgGABIgFgBg");
	this.shape_1402.setTransform(242.3,6.975);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIghAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1403.setTransform(238.55,7.775);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1404.setTransform(233.825,7.775);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#FFFFFF").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1405.setTransform(229.15,7.775);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1406.setTransform(224.325,8.625);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1407.setTransform(219.525,8.725);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFFFFF").s().p("AgBAfIgDgEQgBgCABgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1408.setTransform(216.1,6.975);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1409.setTransform(209.725,6.925);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1410.setTransform(204.95,7.725);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_1411.setTransform(199.975,7.775);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFFFFF").s().p("AgNAdQgFgDAAgIIAIABQAAAEADABQACADAFAAQAFAAADgDQADgCABgEIAAgKQgFAGgHAAQgJAAgGgHQgEgHAAgIQAAgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAHAAIAAAnQAAALgBAEQgDAFgFADQgFACgGAAQgIAAgFgEgAgIgWQgEAFAAAIQAAAJAEADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgEgEgGAAQgEAAgEAEg");
	this.shape_1412.setTransform(192.45,8.675);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1413.setTransform(187.65,7.725);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1414.setTransform(184.2,6.875);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1415.setTransform(182.05,6.975);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FFFFFF").s().p("AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg");
	this.shape_1416.setTransform(178.3,7.725);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1417.setTransform(174.85,6.875);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAGAAIAAAHQADgFACgBIAEgCQAFAAADADIgCAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBADIgCAJIAAAYg");
	this.shape_1418.setTransform(172.75,7.725);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1419.setTransform(168.575,8.625);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1420.setTransform(161.05,7.775);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#FFFFFF").s().p("AALAgIAAgdQAAgFgCgDQgDgDgFAAQgCAAgEACQgDACgBADIgBAIIAAAZIgIAAIAAg/IAIAAIAAAXQAGgGAHAAQAFAAAEACQAEACACADQABAEAAAGIAAAdg");
	this.shape_1421.setTransform(156.1,6.875);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgGABIgHgBg");
	this.shape_1422.setTransform(152.45,6.975);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#FFFFFF").s().p("AgFAhIAAgoIgIAAIAAgGIAIAAIAAgFIAAgHIAEgFQACgCAFAAIAHABIgBAHIgEgBQgEAAgBACQgCACAAAEIAAAEIAKAAIAAAGIgKAAIAAAog");
	this.shape_1423.setTransform(147.7,6.825);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1424.setTransform(143.775,7.775);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1425.setTransform(137.7,6.975);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FFFFFF").s().p("AAMAXIgKgOIgCgEIgLASIgKAAIARgXIgPgWIAJAAIAIALIACAFIAEgFIAHgLIAJAAIgPAWIARAXg");
	this.shape_1426.setTransform(134.25,7.775);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#FFFFFF").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgHgGgAgIgNQgEADAAAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_1427.setTransform(129.55,7.775);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FFFFFF").s().p("AgBAfIgCgEQgBgCAAgHIAAgaIgHAAIAAgGIAHAAIAAgMIAGgFIAAARIAIAAIAAAGIgIAAIAAAaIABAEIABACIACAAIAEAAIACAHIgHABIgGgBg");
	this.shape_1428.setTransform(125.9,6.975);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1429.setTransform(119.975,8.725);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgDADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAEAAQAGAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_1430.setTransform(114,7.725);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgDADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgCgDgEAAQgDAAgEACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQACACACAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_1431.setTransform(106.55,7.725);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1432.setTransform(100.325,7.825);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#FFFFFF").s().p("AgJAeQgFgDgDgGQgCgFAAgIQAAgHACgEQACgGAFgDQAFgDAFAAQAEAAADACIAFAEIAAgXIAIAAIAABAIgHAAIAAgGQgEAHgJAAQgFAAgEgDgAgHgEQgEAEAAAIQAAAJAEAFQAEAEAEAAQAFAAADgEQAEgEAAgJQAAgJgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_1433.setTransform(95.225,6.925);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FFFFFF").s().p("AgQAgIgBgIIAEABIAFgBIACgCIADgGIAAgCIgRguIAIAAIAKAbIACAKIAEgKIAKgbIAHAAIgRAvIgEAKQgCAEgDACQgCACgEAAIgFgBg");
	this.shape_1434.setTransform(88.275,8.725);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1435.setTransform(85.025,6.875);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1436.setTransform(81.725,8.625);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEADgCQAEgCAEAAQAGAAADACQADACABAEQAGgIAIAAQAHAAAEAEQADAEABAIIAAAfg");
	this.shape_1437.setTransform(75.4,7.725);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1438.setTransform(70.7,6.875);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1439.setTransform(67.475,7.775);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACQACADABAFIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1440.setTransform(60.575,7.775);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_1441.setTransform(57.4,6.875);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgGAAgCADQgEADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgDAAgDACQgDABgCAEIgBAJIAAAYIgIAAIAAguIAHAAIAAAHQACgEAFgCQADgCAFAAQAFAAADACQACACACAEQAFgIAKAAQAGAAAEAEQAEAEgBAIIAAAfg");
	this.shape_1442.setTransform(50.25,7.725);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#FFFFFF").s().p("AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg");
	this.shape_1443.setTransform(44.025,7.825);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#FFFFFF").s().p("AgMAVQgFgEgBgIIAHgBQABAFADACQADADAEAAQAGAAADgCQACgDAAgDQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAgBIgIgDIgLgDQgEgBgBgDQgCgDAAgDQAAgDABgDIAEgEIAFgDIAHAAQAFAAAEABQAEACACACIADAIIgIABQgBgEgCgCQgDgCgEAAQgFAAgCACQgDACAAACIABADIADACIAGACIAMAEIAFADQACACAAAFQAAADgCAEQgCADgFACQgEACgGAAQgIAAgEgDg");
	this.shape_1444.setTransform(39.325,7.775);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_1445.setTransform(34.775,8.625);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1446.setTransform(30.975,6.875);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#FFFFFF").s().p("AAYAYIAAgdIgBgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgFAAgEADQgDADAAAIIAAAaIgHAAIAAgeQAAgFgCgCQgBgDgFAAQgEAAgDACQgCABgBAEIgBAJIAAAYIgIAAIAAguIAGAAIAAAHQADgEADgCQAEgCAFAAQAFAAADACQADACABAEQAFgIAJAAQAHAAAEAEQAEAEAAAIIAAAfg");
	this.shape_1447.setTransform(23.55,7.725);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FFFFFF").s().p("AgOASQgHgGABgMQgBgKAHgHQAFgGAJAAQAJAAAGAGQAGAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgIAAgGgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_1448.setTransform(17.35,7.775);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg");
	this.shape_1449.setTransform(13.75,7.725);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1450.setTransform(9.425,7.775);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAIAAIAAA4IAfAAIAAAHg");
	this.shape_1451.setTransform(4.675,6.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legal1, new cjs.Rectangle(0,0,384.5,184.2), null);


(lib.hit2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5BQIAAifIHzAAIAACfg");
	this.shape.setTransform(39.9979,8,1.5999,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,16);


(lib.hero_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hero();
	this.instance.setTransform(0,0,0.5,0.5001);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero_1, new cjs.Rectangle(0,0,364,250.1), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgAyIgMgfIgpAAIgLAfIgOAAIAnhjIANAAIApBjgAgGgTIgLAcIAhAAIgLgbIgGgUIgFATg");
	this.shape.setTransform(103.525,27.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAyIAAhXIggAAIAAgMIBOAAIAAAMIghAAIAABXg");
	this.shape_1.setTransform(94.65,27.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAwQgJgEgFgIQgGgIAAgKIANgBQAAAHAEAFQADAFAHADQAHADAHAAQAIAAAGgCQAFgCADgEQADgEAAgFQAAgFgDgDQgCgEgHgCIgRgFQgNgDgGgCQgHgEgEgGQgDgFAAgHQAAgIAEgGQAEgHAJgDQAIgEAKAAQAKAAAJAEQAIAEAFAGQAEAHABAJIgNABQgBgJgGgFQgGgFgLAAQgLAAgGAEQgFAFAAAGQAAAFAEAEQADADAQAEQAQAEAGACQAIAEAFAGQAEAGAAAIQAAAIgFAHQgEAHgJAEQgJAEgKAAQgNAAgJgEg");
	this.shape_2.setTransform(85.625,27.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAtQgLgHgGgMQgGgLAAgOQAAgYANgOQAOgOAUAAQAOAAALAHQALAHAGALQAGAMAAAOQAAAQgGAMQgGAMgMAGQgLAGgNAAQgNAAgLgHgAgXgeQgKAKAAAWQAAASAJAKQAKALAOAAQAPAAAKgLQAJgKAAgUQAAgLgEgJQgEgJgIgFQgIgFgKAAQgNAAgKAJg");
	this.shape_3.setTransform(75.575,27.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAyIAAhjIAlAAIAPABQAHABAFADQAFAEADAGQADAHAAAHQAAAMgIAIQgIAKgVgBIgZAAIAAApgAgYgBIAZAAQANAAAFgGQAFgEAAgJQAAgGgDgEQgDgFgFgBIgNgBIgYAAg");
	this.shape_4.setTransform(65.675,27.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAtQgLgHgGgMQgGgLAAgOQAAgYANgOQAOgOAUAAQAOAAALAHQALAHAGALQAGAMAAAOQAAAQgGAMQgGAMgMAGQgLAGgNAAQgNAAgLgHgAgXgeQgKAKAAAWQAAASAJAKQAKALAOAAQAPAAAKgLQAJgKAAgUQAAgLgEgJQgEgJgIgFQgIgFgKAAQgNAAgKAJg");
	this.shape_5.setTransform(55.325,27.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbAyIgNgVIgJgNIgGgIIgGgCIgIAAIgPAAIAAAsIgNAAIAAhjIArAAQAOAAAHADQAHACAEAHQAEAHAAAIQAAALgHAHQgHAGgOADIAIAEQAFAFAGAJIARAbgAgegFIAdAAQAIAAAFgCQAFgCADgEQACgEAAgFQAAgHgFgFQgFgEgLAAIgfAAg");
	this.shape_6.setTransform(45.275,27.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAyIAAhjIAlAAIAPABQAHABAFADQAFAEADAGQADAHAAAHQAAAMgIAIQgIAKgVgBIgZAAIAAApgAgYgBIAZAAQANAAAFgGQAFgEAAgJQAAgGgDgEQgDgFgFgBIgNgBIgYAAg");
	this.shape_7.setTransform(35.325,27.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAyIAAhjIBHAAIAAALIg6AAIAAAgIA2AAIAAAKIg2AAIAAAiIA8AAIAAAMg");
	this.shape_8.setTransform(103.35,10.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAiAAIARABQAJACAGAGQAIAGAEALQADAKAAANQAAALgCAJQgDAIgEAGQgEAGgFADQgFAEgHACQgHABgIAAgAgbAmIAVAAQAJAAAGgBQAFgDAEgDQAEgFADgHQADgIAAgLQAAgPgFgJQgGgIgHgEQgFgCgLAAIgVAAg");
	this.shape_9.setTransform(93.625,10.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAtQgLgHgGgMQgGgLAAgOQAAgYANgOQAOgOAUAAQAOAAALAHQALAHAGALQAGAMAAAOQAAAQgGAMQgGAMgMAGQgLAGgNAAQgNAAgLgHgAgXgeQgKAKAAAWQAAASAJAKQAKALAOAAQAPAAAKgLQAJgKAAgUQAAgLgEgJQgEgJgIgFQgIgFgKAAQgNAAgKAJg");
	this.shape_10.setTransform(79.075,10.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAiAAIARABQAJACAGAGQAIAGAEALQADAKAAANQAAALgCAJQgDAIgEAGQgEAGgFADQgFAEgHACQgHABgIAAgAgbAmIAVAAQAJAAAGgBQAFgDAEgDQAEgFADgHQADgIAAgLQAAgPgFgJQgGgIgHgEQgFgCgLAAIgVAAg");
	this.shape_11.setTransform(68.725,10.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_12.setTransform(61.575,10.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAiAAIARABQAJACAGAGQAIAGAEALQADAKAAANQAAALgCAJQgDAIgEAGQgEAGgFADQgFAEgHACQgHABgIAAgAgbAmIAVAAQAJAAAGgBQAFgDAEgDQAEgFADgHQADgIAAgLQAAgPgFgJQgGgIgHgEQgFgCgLAAIgVAAg");
	this.shape_13.setTransform(54.725,10.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAyIAAhjIBIAAIAAALIg6AAIAAAgIA2AAIAAAKIg2AAIAAAiIA9AAIAAAMg");
	this.shape_14.setTransform(45,10.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglAyIAAhjIAlAAIAPABQAHABAFAEQAFADADAGQADAHAAAHQAAANgIAIQgIAIgVABIgZAAIAAAogAgYgCIAZAAQANAAAFgEQAFgFAAgJQAAgGgDgFQgDgEgFgCIgNgBIgYAAg");
	this.shape_15.setTransform(35.725,10.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7A99AC").s().p("AnsDIQhTAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BTAAIPZAAQBTAAA7A6QA6A7AABSQAABTg6A6Qg7A7hTAAg");
	this.shape_16.setTransform(69.325,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,138.7,40), null);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,364,250), null);


(lib.stripes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hero
	this.hero = new lib.hero_1();
	this.hero.name = "hero";
	this.hero.setTransform(0.2,-0.1,1,1,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.hero).wait(1));

	// roadsTop
	this.roadsTop = new lib.roads();
	this.roadsTop.name = "roadsTop";
	this.roadsTop.setTransform(182,125,1,1,0,0,0,182,125);

	this.timeline.addTween(cjs.Tween.get(this.roadsTop).wait(1));

	// roadsBottom
	this.roadsBottom = new lib.roadsBottom();
	this.roadsBottom.name = "roadsBottom";
	this.roadsBottom.setTransform(182,163.5,1,1,0,0,0,182,86.5);

	this.timeline.addTween(cjs.Tween.get(this.roadsBottom).wait(1));

	// Layer_8
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stripes, new cjs.Rectangle(0,0,364,250.4), null);


(lib.legal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// legal1
	this.legal1 = new lib.legal1();
	this.legal1.name = "legal1";
	this.legal1.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.legal1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(0,0,269.1,128.9), null);


(lib.detailsMc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// close
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIALAAIAABEIAmAAIAAAJg");
	this.shape.setTransform(112.425,28.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAnIgJgYIggAAIgJAYIgLAAIAehNIALAAIAgBNgAgFgPIgIAWIAaAAIgJgVIgEgQIgFAPg");
	this.shape_1.setTransform(105.475,28.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAkQgKgFgFgKQgEgJAAgMQAAgKAEgKQAFgKAJgFQAJgFALAAQAJAAAGADQAHADAEAFQAEAFACAIIgJACQgCgGgDgDQgCgEgFgCQgFgCgGAAQgGAAgFACQgFACgEAEIgFAIQgDAHAAAIQAAAKAEAHQAEAHAHAEQAGADAHAAQAHAAAGgCIAKgGIAAgPIgXAAIAAgIIAhAAIAAAcQgHAGgIAEQgJADgIAAQgLAAgJgFg");
	this.shape_2.setTransform(97.475,28.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA3AAIAAAJIgtAAIAAAYIArAAIAAAIIgrAAIAAAbIAvAAIAAAJg");
	this.shape_3.setTransform(89.7,28.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIALAAIAABEIAmAAIAAAJg");
	this.shape_4.setTransform(83.075,28.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA4AAIAAAJIguAAIAAAYIArAAIAAAIIgrAAIAAAbIAvAAIAAAJg");
	this.shape_5.setTransform(73.2,28.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAlQgHgDgEgGQgEgGAAgIIAKgBQAAAGADAEQACAEAGACQAFACAGAAQAGAAAEgCQAFgBACgDQACgDAAgEQAAgEgCgDQgCgCgFgCIgNgEIgPgEQgGgDgDgEQgCgFAAgFQAAgGADgFQADgFAHgDQAGgDAIAAQAIAAAHADQAHADADAFQAEAGAAAHIgKAAQgBgHgEgEQgFgEgJAAQgJAAgEAEQgEADAAAFQAAAEADADQADADAMADIARAFQAHACADAFQADAFAAAGQAAAGgDAGQgEAFgHAEQgGADgJAAQgJAAgIgEg");
	this.shape_6.setTransform(65.675,28.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAjQgJgFgEgJQgFgKABgKQgBgTALgLQALgLAPAAQALAAAJAFQAJAGAEAJQAEAJABALQgBAMgEAJQgFAKgJAFQgJAFgKAAQgKAAgJgGgAgSgXQgIAHAAARQAAAOAIAJQAHAIALAAQALAAAJgJQAHgIAAgPQAAgJgEgHQgDgHgGgEQgGgEgIAAQgKAAgIAIg");
	this.shape_7.setTransform(57.8,28.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIALAAIAABEIAmAAIAAAJg");
	this.shape_8.setTransform(50.675,28.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAjQgIgFgFgKQgEgJAAgLQAAgMAFgJQAFgJAIgFQAJgFAJAAQAMAAAIAGQAIAGADALIgKADQgDgJgFgEQgFgEgIAAQgIAAgGAEQgGAFgDAHQgCAHAAAIQAAAJADAIQADAHAGAEQAGAEAGAAQAJAAAGgFQAGgFACgKIALACQgDANgJAHQgIAHgNAAQgLAAgIgGg");
	this.shape_9.setTransform(43.475,28.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAyIAAgIIALAAIAAhTIgLAAIAAgIIAVAAIAABjg");
	this.shape_10.setTransform(34.625,29.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAiIgRgZIgDgEIgCAFIgSAYIgKAAIAagiIgXghIAKAAIANARIAEAJIAGgIIANgSIAKAAIgYAgIAaAjg");
	this.shape_11.setTransform(29.425,29.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAyIAAhjIAVAAIAAAIIgLAAIAABTIALAAIAAAIg");
	this.shape_12.setTransform(24.175,29.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// legal
	this.legal = new lib.legal();
	this.legal.name = "legal";
	this.legal.setTransform(21.45,45.5,1.4197,1.4256);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// bg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("EggGATEMAAAgmHMBANAAAMAAAAmHg");
	this.shape_13.setTransform(121.9,132.9,1,0.9836,0,0,0,-90.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.detailsMc, new cjs.Rectangle(0,0,417.8,250.2), null);


(lib.details = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.hit = new lib.hit2();
	this.hit.name = "hit";
	this.hit.setTransform(-21.9,-48.45,0.6953,0.5097);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.hit2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.details, new cjs.Rectangle(-21.9,-48.4,120.5,62.9), null);


(lib.aniBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stripesGuide
	this.stripesGuide = new lib.stripes();
	this.stripesGuide.name = "stripesGuide";
	this.stripesGuide.setTransform(20.05,-109.15,1.604,1.6041,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.stripesGuide).wait(1));

	// stripes
	this.stripes = new lib.stripes();
	this.stripes.name = "stripes";
	this.stripes.setTransform(21.5,-160.7,2.0294,2.0296,0,0,0,0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.stripes).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aniBox, new cjs.Rectangle(19.8,-159.7,739.6,508.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var aniBox = this.aniBox;
		var stripes = aniBox.stripes;
		var stripesGuide = aniBox.stripesGuide;
		var hero = aniBox.stripes.hero;
		var roadsTop = aniBox.stripes.roadsTop;
		var roadsBottom = aniBox.stripes.roadsBottom;
		
		var bg = this.bg;
		var white = this.white;
		
		var txt1 = this.txt1;
		var txt2 = this.txt2;
		var txt3 = this.txt3;
		var txt4 = this.txt4;
		var txt5 = this.txt5;
		
		var h = lib.properties.height;
		var w = lib.properties.width;
		
		var cta = this.cta;
		
		
		stage.on("drawstart", initializedClips, this, true);
		function initializedClips() { }
		
		
		//MASK START
		var toMask = [
			//WPISUJEMY OBIEKTY MASKOWANE PO PRZECINKU
			roadsBottom, roadsTop,txt2,txt3
		];
		
		function makeTxtsMask(){
		
		 for (var i = 0; i < toMask.length; i++) {
			 
			var txtMask = new createjs.Shape();
			txtMask.graphics.beginStroke("1px solid #ccc").drawRect(0, 0, (toMask[i].nominalBounds.width * toMask[i].scaleX), (toMask[i].nominalBounds.height * toMask[i].scaleY));
		
				toMask[i].mask = txtMask;
				toMask[i].mask.regX = toMask[i].regX * toMask[i].scaleX;
				toMask[i].mask.regY = toMask[i].regY * toMask[i].scaleY;
				toMask[i].mask.x = toMask[i].x;
				toMask[i].mask.y = toMask[i].y;
			 
				//toMask[i].parent.addChild(txtMask); // Also made visible
			}
		}
		makeTxtsMask();
		//MASK END
		
		//LEGAL START
		var details = this.details;
		var detailsMc = this.detailsMc;
		var detailsStart = detailsMc.y;
		detailsMc.alpha = 0;
		var detailsState = false;
		
		var legal = detailsMc.legal;
		var timePerFrame = 6;
		var totalFrame = 1;
		var legalSprite = TweenMax.to(legal, (timePerFrame*totalFrame), {y:"-="+(h*totalFrame-h), ease: SteppedEase.config(totalFrame-1),yoyo: false, repeat: -1, paused:true} );
		
		function onDetailsHover(eventObj) { //console.log(eventObj);
			if (!detailsState) {       
				TweenLite.to(detailsMc, .5, {alpha:1, ease:Power2.easeOut});
				legalSprite.restart();
				tl.pause();
				detailsState = true; 
		
			} else {
				if(eventObj.type!="mouseover") {
					legalSprite.pause();
					TweenLite.to(detailsMc, .5, {alpha:0, ease:Power2.easeInOut,onComplete:function()
						{2
							detailsState = false; //console.log(detailsState);
						}
					});
					tl.play();
				}
			}
		}
		
		function addListeners(){
			//POKAZ LEGAL - ON MOUSE OVER
			details.hit.addEventListener("mouseover", onDetailsHover);
			
			//UKRYJ LEGAL - ON MOUSE OUT
			details.hit.addEventListener("mouseout", onDetailsHover);
			
			//UKRYJ LEGAL - ON CLICK
			//detailsMc.addEventListener("click", onDetailsHover);
		}
		
		
		addListeners();
		detailsMc.cache(0, 0, detailsMc.nominalBounds.width, detailsMc.nominalBounds.height, 2);
		
		//LEGAL END
		
		
		
		this.tl = tl = new TimelineMax({onStart:getTime, repeat: 1, repeatDelay:4.5});
		function getTime(){
			console.log(tl.duration());
		}
		
		counter = 0;
		
		tl
			.set([stripesGuide],{visible:false})
			//.set([txt1], {y: 163})
			.set([roadsBottom.mask], {rotation:"54", scaleY:2.2, scaleX:2.2, x:"-="+w})
			
			.add("frame1", "+=0")
			.from(bg, .3, {alpha:0, ease: Power1.easeOut}, "frame1")
		
			.add("frame2", "frame1+=.1")
			.from([roadsTop.mask], 1, {y:"-="+h, ease: Power1.In}, "frame2")
			.to([roadsBottom.mask], 6, {x:"+="+w, scaleY:4.2, scaleX:4.2, ease: Power2.easeOut}, "frame2+=.85")
			
			//.to([stripes], .5, {x: stripesGuide.x, y: stripesGuide.y, scaleX: stripesGuide.scaleX, scaleY: stripesGuide.scaleY , ease: Sine.easeInOut}, "frame2")
			 .from([hero], .5, {x:"-="+30, y:"+="+10, scaleX: .8, scaleY:.8, alpha:0, ease: Sine.easeInOut}, "frame2+=1.5")
		
			.add("frame3", "frame2+=4")
			.to([stripes], .5,{x: stripesGuide.x, y: stripesGuide.y, scaleX: stripesGuide.scaleX, scaleY: stripesGuide.scaleY , ease: Sine.easeInOut}, "frame3")
			.from(white, .5, {x:w, ease: Sine.easeInOut}, "frame3")
			.from([txt1, txt2], .5, {y: "+=50", alpha: 0,  ease: Power2.easeOut}, "frame3+=.1")
		
		
			.add("frame4", "frame3+=4")
			.to([txt2.mask], .5, {y:"-="+30, alpha:0,  ease: Power2.easeOut}, "frame4")
			.from([txt3], .5, {y: "+=50", alpha: 0,  ease: Power2.easeOut}, "frame4")
			
			.add("frame5","frame4+=5")
		
			.to([txt3.mask], .5, {y:"-="+50, alpha:0,  ease: Power2.easeOut}, "frame5")
			//.to([txt1], .5, {y: "-="+30,  ease: Power2.easeOut}, "frame5")
			.from([txt5], .5, {y: "+="+h, alpha: 0,  ease: Power2.easeOut}, "frame5+=.3")	
			.from([cta], .5, {alpha: 0, scaleY: 0, ease: Power2.easeOut}, "frame5+=.6")
			.from([txt4, details], .5, {y: "+="+h, alpha: 0,  ease: Power2.easeOut}, "frame5+=.9")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// detailcMc
	this.detailsMc = new lib.detailsMc();
	this.detailsMc.name = "detailsMc";
	this.detailsMc.setTransform(563.6,1.55,0.9476,0.9476);

	this.timeline.addTween(cjs.Tween.get(this.detailsMc).wait(1));

	// detailsBtn
	this.details = new lib.details();
	this.details.name = "details";
	this.details.setTransform(901.2,309.7,1.7192,1.7192,0,0,0,0.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.details).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(855.2,154.75,1.1181,1.1158,0,0,0,69.9,20.1);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(130.25,35.35,0.55,0.55,0,0,0,131.9,29.2);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// txt5
	this.txt5 = new lib.txt5();
	this.txt5.name = "txt5";
	this.txt5.setTransform(796.85,217,1.1686,1.1684,0,0,0,177.2,73.7);

	this.timeline.addTween(cjs.Tween.get(this.txt5).wait(1));

	// txt4
	this.txt4 = new lib.txt4();
	this.txt4.name = "txt4";
	this.txt4.setTransform(1061.8,239.7,1.3263,1.3263,0,0,0,153.3,13.1);

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(1));

	// txt3
	this.txt3 = new lib.txt3();
	this.txt3.name = "txt3";
	this.txt3.setTransform(763.3,66,1.1904,1.2141,0,0,0,151.8,13);

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	// txt2
	this.txt2 = new lib.txt2();
	this.txt2.name = "txt2";
	this.txt2.setTransform(583.8,50.3,1.1148,1.1133,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// txt1
	this.txt1 = new lib.txt1();
	this.txt1.name = "txt1";
	this.txt1.setTransform(581.6,16.9,1.1217,1.1217);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// white
	this.white = new lib.white();
	this.white.name = "white";
	this.white.setTransform(559,-34,1.37,1.37);

	this.timeline.addTween(cjs.Tween.get(this.white).wait(1));

	// ramka copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKNAR+MAAAgj7MCUbAAAMAAAAj7g");
	mask.setTransform(485,125);

	// aniBox
	this.aniBox = new lib.aniBox();
	this.aniBox.name = "aniBox";
	this.aniBox.setTransform(130.8,139,1,1,0,0,0,150,139);

	var maskedShapeInstanceList = [this.aniBox];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.aniBox).wait(1));

	// bg
	this.bg = new lib.bg_1();
	this.bg.name = "bg";
	this.bg.setTransform(0.05,0,2.6647,1);

	var maskedShapeInstanceList = [this.bg];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(485,91,532.4,286);
// library properties:
lib.properties = {
	id: '1C1E05274011C24EBDE45892271DAE73',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"fond.jpg", id:"fond"},
		{src:"hero.png", id:"hero"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1C1E05274011C24EBDE45892271DAE73'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;