function loop(x) {
    if (x > 0 && x % 3 === 0) {
        console.log("------->", x);
    }
    if (x > 0) {
        loop(x - 1);
    }
}

loop(15);
