const readline = require("readline");

class MinHeap {
  constructor() {
    this.heap = [null]; 
  }

  size() {
    return this.heap.length - 1; 
  }

  heapPush(val) {
    this.heap.push(val);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (parentIdx > 0 && this.heap[parentIdx] > val) {
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ];
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  heapPop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const returnVal = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = 2 * currentIdx;
    let rightIdx = 2 * currentIdx + 1;

    while (true) {
      const leftValid = leftIdx < this.heap.length;
      const rightValid = rightIdx < this.heap.length;

      if (!leftValid && !rightValid) break;

      const swapIdx =
        rightValid && (!leftValid || this.heap[rightIdx] < this.heap[leftIdx])
          ? rightIdx
          : leftIdx;

      if (this.heap[currentIdx] > this.heap[swapIdx]) {
        [this.heap[currentIdx], this.heap[swapIdx]] = [
          this.heap[swapIdx],
          this.heap[currentIdx],
        ];
        currentIdx = swapIdx;
        leftIdx = 2 * currentIdx;
        rightIdx = 2 * currentIdx + 1;
      } else {
        break;
      }
    }

    return returnVal;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minHeap = new MinHeap();
let N;
let rowCount = 0;

rl.on("line", function (line) {
  if (!N) {
    N = parseInt(line); 
  } else {
    let row = line.split(" ").map(Number);
    for (let j = 0; j < N; j++) {
      minHeap.heapPush(row[j]);
      if (minHeap.size() > N) {
        minHeap.heapPop();
      }
    }
    rowCount++;
    if (rowCount === N) {
      rl.close();
    }
  }
}).on("close", function () {
  const ans = minHeap.heapPop(); 
  console.log(ans);
});
