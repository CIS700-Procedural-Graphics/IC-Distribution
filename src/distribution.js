function fract(x) {
    return x - Math.floor(x);
}

function bias(b, x) {
    return Math.pow(x, Math.log(b) / Math.log(0.5));
}

function impulse(i, x) {
    var j = i * x;
    return j * Math.exp(1.0 - j);
}

function cubicPulse(c, w, x) {
    x = Math.abs(x - c);

    if (x > w) return 0.0;

    x /= w;

    return 1.0 - x * x * (3.0 - (2.0 * x));
}

export function func1(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var y = (height - abs_y);

    var fnA = y * 0.5;
    var fnB = 0.25 * Math.sin(6.0 * y);
    var fnC = Math.sin(0.35 * y) * fnA + fnB;
    var fn = fnC;

    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(fn, settings.size, fn);
}

export function func2(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var y = (height - abs_y);

    var fnA = (Math.pow(y, 3.0) / 2000.0);
    var fnB = fract(y / 5.0) * fnA;
    var fn = fnB;

    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(fn, settings.size, fn);
}

export function func3(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var y = (height - abs_y);

    var freq = 0.2;
    var amplitude = 2.0;

    var fnA = Math.abs((y * freq) % amplitude - (0.5 * amplitude));
    var fnB = Math.pow(fnA, 2.0) * y;
    var fn = fnB;

    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(fn, settings.size, fn);
}

// NOTE:
// This one isn't as good as the rest, struggled a bit trying
// to find an impulse curve to fit the outer shape, settled on a sine
// wave but it clearly isn't perfect.

export function func4(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var y = (height - abs_y);

    var fnA = Math.sin((y / 16.0) - 1.5) * 25.0;
    var fnB = (2.0 * (1.0 - fract(y / 4.0))) + fnA + 25.0;
    var fn = fnB;

    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(fn, settings.size, fn);
}