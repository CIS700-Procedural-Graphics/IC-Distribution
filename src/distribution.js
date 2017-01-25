const THREE = require('three'); // older modules are imported like this. You shouldn't have to worry about this much

function fract(x) {
    return x > 0 ? (x - Math.floor(x)) : 1.0 - (x - Math.ceil(x));
}

export function func1(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var t = height - abs_y;


    var tt = Math.pow(t / height, 1.5) * height;

    var modulator = tt * .75;

    var wave = Math.abs(Math.sin(t / 3.35)) + Math.abs(Math.sin(t * 3.0)) * .055;

    var scale = wave * modulator;
    
    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(scale, settings.size, scale);
}


export function func2(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var t = height - abs_y;


    var tt = Math.pow(t / height, 3.0) * height;

    var modulator = tt * .75;

    var wave = fract(t * .2);// Math.abs(Math.sin(t / 3.35)) + Math.abs(Math.sin(t * 3.0)) * .055;

    var scale = wave * modulator;
    
    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(scale, settings.size, scale);
}

export function func3(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var t = height - abs_y;


    var tt = Math.pow(t / height, 3.0) * height;

    var modulator = tt * .75;

    var wave = 1.0 - Math.abs(Math.sin(t / 2.0));

    var scale = wave * modulator;
    
    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(scale, settings.size, scale);
}


export function func4(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var t = (height - abs_y) / height;

    // var wave = THREE.Math.smootherstep(Math.pow(t / height, 1.0), 0, 1) * t * .75;


    var wave = (Math.sin(t * 3.1415 - 1.25) * .5 + .5) * height * .75;

    wave += (1.0 - fract(t * height * .25)) * 6  * (Math.sin(t * 3.1415 - 1.25) * .5 + .5);//* THREE.Math.smootherstep(t / height, 0, 1);// Math.abs(Math.sin(t / 3.35)) + Math.abs(Math.sin(t * 3.0)) * .055;

    var scale = wave;
    
    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(scale, settings.size, scale);
}

export function sawtooth(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    
    mesh.position.set(0, abs_y, 0);
}

export function triangle(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    
    mesh.position.set(0, abs_y, 0);
}

export function step(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    
    mesh.position.set(0, abs_y, 0);
}