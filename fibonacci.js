// Iterative
function fib(n) {
   let seq = [0, 1];
   for (let i = 2; i < n; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
   }
   return seq.slice(0, n);
}

// Recursive
function fibRec(n) {
   if (n === 1) return [0];
   if (n === 2) return [0, 1];

   const seq = fibRec(n - 1);
   seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
   return seq;
}
