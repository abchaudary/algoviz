import React, { Component } from 'react'
import { getBinarySearchAnimations, getLinearSearchAnimations } from '../searchalgos/searchalgos';
import { getMergeSortAnimations } from '../sortalgos/sortalgos';

export class SearchViz extends Component {
    constructor (props) {
        super(props);

        this.state = {
            searchRunning: false,
            array: [],
            arraySize: 50,
            searchVal: 0,
            searchIdx:0,
            delay: 100,
            searchingAlgo: "Linear Search",
            searchingAlgoInfoCurrent: "<p>No Info found!</p>",
            searchingAlgoInfo: {
                BubbleSort: "Bubble Sort is an algorithm which is used to sort a list of elements, for example elements in an array.<br>The algorithm compares two adjacent elements and then swaps them if they are not in order.<br>The process is repeated until no more swapping is needed.<br><br>Let's take the following array: [3, 1, 5, 2]<br>Step 1: [1, 3, 5, 2] - the first two elements are compared and swapped.<br>Step 2: [1, 3, 5, 2] - the next pair is compared and not swapped, as they are in order.<br>Step 3: [1, 3, 2, 5] - the last two elements are swapped.<br><br>This was the first iteration over the array. Now we need to start the second iteration:<br>Step 1: [1, 3, 2, 5]<br>Step 2: [1, 2, 3, 5]<br>Step 3: [1, 2, 3, 5]<br><br>The third iteration will not swap any elements, meaning that the list is sorted!<br><br>The main advantage of Bubble Sort is the simplicity of the algorithm. Also, it does not require any additional storage space, as it operates in-place.<br>In terms of complexity, bubble sort is considered to be not optimal, as it required multiple iterations over the array. In the worst scenario, where all elements need to be swapped, it will require (n-1)+(n-2)+(n-3)+...+3+2+1 = n(n-1)/2 swaps (n is the number of elements).<br>The algorithm is called Bubble Sort, because with each iteration the smallest element in the list bubbles up to the top, just like a water bubble rises up to the water surface.",
                SelectionSort: "Selection Sort is a simple sorting algorithm that finds the smallest element in the array and swaps it with the element in the first position, then finds the second smallest element and swaps it with the element in the second position, and continues in this way until the entire array is sorted.<br><br>Let's take the following array: [3, 1, 5, 2]<br>Step 1: The smallest element is 1. We swap it with the first element.<br>Result: [1, 3, 5, 2]<br>Step 2: The second smallest is swapped with the second element.<br>Result: [1, 2, 5, 3]<br>Step 3: The third smallest is swapped with the third element.<br>Result: [1, 2, 3, 5]<br>The array is now sorted.<br><br>The algorithm is efficient for smaller lists, but very inefficient for larger lists. Also, it does not require any additional storage space, as it operates in-place.",
                InsertionSort: "Insertion Sort is a simple sorting algorithm that works the way we sort playing cards in our hands. We sort the first two cards and then place the third card in the appropriate position within the first two, and then the fourth is positioned within the first three, and so on until the whole hand is sorted.<br><br>During an iteration, an element of the list is inserted into the sorted portion of the array to its left. So, basically, for each iteration, we have an array of sorted elements to the left, and an array of other elements still to be sorted to the right.<br>Sounds confusing? Let's look at an example to better understand the algorithm.<br><br>Take the following array: [3, 1, 5, 2]<br>Step 1: We start with the second element (1) and properly position it in the 'array' of the first two elements.<br>Result: [1, 3, 5, 2] - now we have a sorted array to the left ([1, 3]), and the other elements to the right. <br>Step 2: The next element is 5. Inserting it into the array to the left results in [1, 3, 5, 2].<br><br>Step 3: The last element (2) is inserted into the corresponding position, resulting in: [1, 2, 3, 5]<br><br>The algorithm is efficient for smaller lists, but very inefficient for larger lists. Also, it does not require any additional storage space, as it operates in-place.",
                MergeSort: "Merge Sort belongs to the category of Divide and Conquer algorithms.<br>These algorithms operate by breaking down large problems into smaller, more easily solvable problems. <br>The idea of the merge sort algorithm is to divide the array in half over and over again until each piece is only one item long. Then those items are put back together (merged) in sort-order.<br><br>Let's have a look at an example:<br>We start by dividing the array:<br>[31, 4, 88, 1, 4, 2, 42]<br>[31, 4, 88, 1]  [4, 2, 42] //divided into 2 parts<br>[31, 4]  [88, 1]  [4, 2]  [42] //divided into 4 parts<br>[31]  [4]  [88]  [1]  [4]  [2]  [42] //single items <br><br>Now we need to merge them back together in sort-order:<br>First we merge single items into pairs. Each pair is merged in sort-order:<br>[4, 31]  [1, 88]  [2, 4]  [42]<br>Next we merge the pairs, again in sort order:<br>[1, 4, 31, 88]  [2, 4, 42]<br>And then we merge the final two groups:<br>[1, 2, 4, 4, 31, 42, 88]<br><br>Now the array is sorted! The idea behind the algorithm is that smaller parts are easier to sort.<br>The merge operation is the most important part of the algorithm.<br><br>Merge Sort is useful for sorting linked lists, as the merge operations can be implemented without extra space for linked lists.<br>For arrays, the algorithm needs extra temporary storage space for each half during each iteration.",
                QuickSort: "QuickSort is another algorithm from the Divide and Conquer category. <br>It operates by breaking down large problems into smaller, more easily solvable problems. <br><br>The idea of QuickSort is the following: a pivot element is picked. The versions of QuickSort differ in the way of pivot picking. First, last, median, or even a randomly selected element is a candidate to be picked as the pivot.<br><br>The primary part of the sort process is partitioning. Once the pivot is picked, the array is partitioned into two halves - one half containing all the elements less than the pivot and the other half containing the elements greater than the pivot. The equal ones can remain either side. Then, the same process occurs to the remaining halves of the array recursively, eventually resulting in a sorted array.<br><br>Suppose we have the following sequence:<br>[ 2, 0, 7, 4, 3 ]<br>We choose 3 (last element) as the pivot. <br>After doing 4 comparisons we get the two halves:<br>[ 2, 0 ] (3) [ 7, 4 ]<br>Now, the same process repeats for the two halves. We choose (0) as a pivot for the lesser half, and (4) for the greater half.<br>After a comparison for each half, we get:<br>[ (0) [2] ] (3) [ (4) [7] ]<br>Which is a sorted sequence.<br><br>QuickSort operates in-place, so it doesn't require extra storage.<br>The choice of the pivot makes a big difference, as an unsuccessful pivot selection can decreases the algorithm's speed significantly.<br><br>A variation of QuickSort is the 3-way QuickSort - it divides the sequence into three pieces: smaller, greater, and equal. This makes it more convenient for data with high redundancy (repetitions).<br><br><br>The randomized version of QuickSort is the most efficient. It chooses the pivot randomly, thus avoiding worst cases for particular patterns (such as sorted arrays), although not entirely.",
            }
        };
        const animTimeouts = [];
    }

    componentDidMount() {
        this.setSearchAlgoInfo();
        this.resetArray(this.state.arraySize);
    }

    setSearchAlgoInfo = () => {
        switch(this.state.searchingAlgo){
            case 'Merge Sort':
                this.setState({searchingAlgoInfoCurrent: this.state.searchingAlgoInfo.MergeSort});
                break;
            case 'Bubble Sort':
                this.setState({searchingAlgoInfoCurrent: this.state.searchingAlgoInfo.BubbleSort});
                break;
            case 'Selection Sort':
                this.setState({searchingAlgoInfoCurrent: this.state.searchingAlgoInfo.SelectionSort});
                break;
            case 'Insertion Sort':
                this.setState({searchingAlgoInfoCurrent: this.state.searchingAlgoInfo.InsertionSort});
                break;
            case 'Quick Sort':
                this.setState({searchingAlgoInfoCurrent: this.state.searchingAlgoInfo.QuickSort});
                break;
            default:
                this.setState({searchingAlgoInfoCurrent: "<p>No Info found!</p>"});
        }
    }

    resetArray = (arrSize) => {
        const array = [];
        const arrayBars = document.getElementsByClassName('arrayBar');
        for(var i=0; i<arrSize; i++){
            array.push(this.randomValGen(5, 1000));
        }
        this.setState({array}, ()=>{
            this.getRandomValtoFind();
            for(var i=0; i<arrSize; i++){
                const barOneStyle = arrayBars[i].style;
                barOneStyle.backgroundColor = 'red';
            }
        });
    }

    randomValGen = (min, max) => {
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    getRandomValtoFind = () => {
        let RI = this.randomValGen(0,this.state.arraySize);
        if(RI === this.state.arraySize){RI = RI-1};
        let RV = this.state.array[RI];
        this.setState({searchIdx:RI});
        this.setState({searchVal:RV});
    }

    setSearchVal = (e) => {
        //
        console.log(e.target.value);
        // this.setState({searchVal:RV})
    }

    arraySlider = (e) => {
        this.setState({arraySize: e.target.value});
        this.resetArray(this.state.arraySize);
    }

    delaySlider = (e) => {
        this.setState({delay: e.target.value});
    }

    algoSelect = (e) => {
        this.setState({searchingAlgo: e.target.value}, () =>{
            this.setSearchAlgoInfo();
        });
    }
    
    stopSearch = () => {
        this.setState({searchRunning: false}, () => {
            for (var i=0; i<this.animTimeouts.length; i++) {
                clearTimeout(this.animTimeouts[i]);
            }
            this.resetArray(this.state.arraySize);
        });
    }
    
    startSearch = () => {
        this.setState({searchRunning: true}, () => {
            this.startSearching();
        });
    }

    startSearching = () => {
        switch(this.state.searchingAlgo){
            case 'Linear Search':
                this.linearSearchMain();
                break;
            case 'Binary Search':
                this.binarySearch();
                break;
            default:
                //
        }
    }

    linearSearchMain = () => {
        const animations = getLinearSearchAnimations(this.state.array, this.state.searchVal);
        var delay = this.state.delay;
        var animTOuts = [];
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i=0; i<animations.length; i++) {
            if (animations[i].length === 1) {
                const barOneIdx = animations[i][0];
                const barOneStyle = arrayBars[barOneIdx].style;
                let tout = setTimeout(() => {
                    barOneStyle.backgroundColor = 'yellow';
                }, i * delay/10);
                animTOuts.push(tout);
            } else if (animations[i].length === 2){
                let tout = setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.backgroundColor = 'green';
                }, i * delay/10);
                animTOuts.push(tout);
            }
        }
        this.animTimeouts = animTOuts;
    }

    binarySearch = () => {
        var delay = this.state.delay;
        var animTOuts = [];
        const animations = getMergeSortAnimations(this.state.array);
        const animations1 = getBinarySearchAnimations(this.state.array, this.state.searchVal);
        for (let i = 0; i <= animations.length; i++) {
            if(i<animations.length){
                const arrayBars = document.getElementsByClassName('arrayBar');
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color1 = i % 3 === 0 ? 'yellow' : 'red';
                    const color2 = i % 3 === 0 ? 'blue' : 'red';
                    // var tout = setTimeout(() => {
                        barOneStyle.backgroundColor = color1;
                        barTwoStyle.backgroundColor = color2;
                    // }, i /10);
                    // animTOuts.push(tout);
                } else {
                    // var tout = setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${(newHeight/100)*10}%`;
                    // }, i /10);
                    // animTOuts.push(tout);
                }
            } else {
                for(let j=0; j<animations1.length; j++){
                    const arrayBars = document.getElementsByClassName('arrayBar');
                    // const isColorChange = i % 3 !== 2;
                    if (animations1[j].length === 2) {
                        const [barOneIdx, barTwoIdx] = animations1[j];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color1 = 'yellow';
                        // const color2 = 'blue';
                        var tout = setTimeout(() => {
                            barOneStyle.backgroundColor = color1;
                            barTwoStyle.backgroundColor = color1;
                        }, j * delay);
                        animTOuts.push(tout);
                    } else {
                        if(j===animations1.length-1){
                            var tout = setTimeout(() => {
                                const barOneIdx = animations1[j];
                                const barOneStyle = arrayBars[barOneIdx].style;
                                barOneStyle.backgroundColor = 'green';
                            }, j * delay);
                        }else{
                            var tout = setTimeout(() => {
                                const barOneIdx = animations1[j];
                                const barOneStyle = arrayBars[barOneIdx].style;
                                barOneStyle.backgroundColor = 'blue';
                            }, j * delay);
                        }
                        animTOuts.push(tout);
                    }
                }
            }
        }
        this.animTimeouts = animTOuts;
        // console.log(animations1);
    }

    render() {
        const {array} = this.state;
        return (
            <>
                <div className="container mx-auto h-full">
                    <div className="w-full md:block md:w-auto text-white">
                        <ul className="flex flex-col px-3 py-2 mt-4 bg-red-50 rounded-lg border border-red-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-red-800 md:dark:bg-red-900 dark:border-red-700">
                            <li className='flex align-content-center gap-2'>
                                {this.state.searchRunning ? 
                                <button onClick={this.stopSearch} className="appearance-dark block px-3 py-1 text-base font-normal text-white-700 bg-red-800 bg-clip-padding bg-no-repeat border border-solid border-red-700 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-red focus:border-gray-300 focus:outline-none">Reset</button> : 
                                <button onClick={this.startSearch} className="appearance-dark block px-3 py-1 text-base font-normal text-white-700 bg-red-800 bg-clip-padding bg-no-repeat border border-solid border-red-700 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-red focus:border-gray-300 focus:outline-none">Start</button>
                                }
                                <select onChange={this.algoSelect} disabled={this.state.searchRunning} className="form-select appearance-dark block w-full px-3 py-1 text-base font-normal text-white-700 bg-red-800 bg-clip-padding bg-no-repeat border border-solid border-red-700 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-red focus:border-gray-300 focus:outline-none" aria-label="Select Sorting Algorithm">
                                    <option value="Linear Search">Linear Search</option>
                                    <option value="Binary Search">Binary Search</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="array_size" className="form-label">Size: {this.state.arraySize}</label>
                                <input type="range" onChange={this.arraySlider} disabled={this.state.searchRunning} className=" form-range appearance-none w-full h-1 p-0 dark:bg-red-500 focus:outline-none focus:ring-0 focus:shadow-none" min="10" defaultValue={this.state.arraySize} max="200" id="array_size" />
                            </li>
                            <li>
                                <label htmlFor="delay" className="form-label">Delay: {this.state.delay}ms</label>
                                <input type="range" onChange={this.delaySlider} disabled={this.state.searchRunning} className=" form-range appearance-none w-full h-1 p-0 dark:bg-red-500 focus:outline-none focus:ring-0 focus:shadow-none" min="50" defaultValue={this.state.delay} max="2000" id="delay" />
                            </li>
                            <li>
                                <label htmlFor="small-input" className="form-label text-xs">Value to find</label>
                                <p id="small-input" className="text-md text-gray-100">{this.state.searchVal}</p>
                                {/* <input type="number" id="small-input" value={this.state.searchVal} disabled onChange={this.setSearchVal} className="outline-none block p-2 w-full text-red-900 bg-red-50 rounded-lg border border-red-300 sm:text-xs focus:ring-red-500 focus:border-red-500 dark:bg-red-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"/> */}
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 grid grid-cols-4 sm:grid-cols-4 gap-4 px-4 sm:px-0">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="customCard h600px">
                                <div className="barsContainer">
                                    {array.map((val, idx) => (
                                        <div className='arrayBar' key={idx} style={{height: `${(val/100)*10}%`}}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-1">
                            <div className="customCard h600px">
                                <div className="console">                                    
                                    <p className="text-2xl text-gray-100">Console_</p>
                                    <label htmlFor="default-toggle" className="inline-flex relative items-center mb-4 cursor-pointer">
                                        <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-red-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-red-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 grid grid-cols-4 sm:grid-cols-4 gap-4 px-4 sm:px-0">
                        <div className="col-span-4 sm:col-span-4">
                            <div className="customCard">
                                <div className="p-4">                                    
                                    <p className="text-3xl text-gray-100 capitalize mb-2">Info about {this.state.searchingAlgo}</p>
                                    <p className="text-lg text-gray-100" dangerouslySetInnerHTML={{__html: this.state.searchingAlgoInfoCurrent}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 grid grid-cols-4 sm:grid-cols-4 gap-4 px-4 sm:px-0">
                        <div className="col-span-4 sm:col-span-4">
                            <div className="customCard">
                                <div className="p-4">                                    
                                    <p className="text-3xl text-gray-100 capitalize mb-2">About Sorting Algorithms</p>
                                    <p className="text-lg text-gray-100">
                                        All sorting algorithms share the goal of outputting a sorted list, but the way that each algorithm goes about this task can vary. When working with any kind of algorithm, it is important to know how fast it runs and in how much space it operates in. These factors are referred to as the algorithm's time complexity and space complexity. 
                                        <br></br>
                                        <br></br>Efficient sorting is important for optimizing the use of other algorithms (such as search and merge algorithms) which require input data in sorted lists.
                                        <br></br>
                                        <br></br>Here are some known sort algorithms:
                                        <br></br>- Bubble Sort
                                        <br></br>- Selection Sort
                                        <br></br>- Insertion Sort
                                        <br></br>- Merge Sort
                                        <br></br>- QuickSort
                                        <br></br>
                                        <br></br>When choosing a sorting algorithm, you need to consider the amount of data you are sorting and how much time you have to implement the algorithm. 
                                        <br></br>For example, QuickSort is a very efficient, but can be pretty tricky to implement. Bubble Sort is simple to implement, but slow. To sort small sets of data, Bubble Sort may be a better option since it can be implemented quickly, but for larger datasets, the speed of QuickSort might be worth the work of implementing the algorithm.
                                        <br></br>
                                        <br></br>All the algorithms are worth evaluating to determine a best fit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 grid grid-cols-4 sm:grid-cols-4 gap-4 px-4 sm:px-0">
                        <div className="col-span-4 sm:col-span-4">
                            <div className="customCard">
                                <div className="p-4">                                    
                                    <p className="text-3xl text-gray-100 capitalize mb-2">Time complexity</p>
                                    <img className='object-cover' src='https://he-s3.s3.amazonaws.com/media/uploads/c950295.png' alt='time complexity'></img>
                                    <p className="text-lg text-gray-100">
                                        In computer science, the time complexity is the computational complexity that measures or estimates the time taken for running an algorithm. 
                                        <br></br>Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that an elementary operation takes a fixed amount of time to perform.
                                        <br></br>
                                        <br></br>Since an algorithm's running time may vary with different inputs of the same size, one commonly considers the worst-case time complexity expressed using Big-O notation, which is the maximum amount of time taken on inputs of a given size. 
                                        <br></br>For example, an algorithm with time complexity O(n) is a linear time algorithm.
                                        <br></br>
                                        <br></br>It is common to exclude lower order constants and coefficients that don't have that big an impact on the overall complexity of the problem.
                                        <br></br>For example: O(2n) or O(n+5) are equal with O(n)
                                        <br></br>
                                        <br></br>O(1) - Constant time: Given an input of size n, it only takes a single step for the algorithm to accomplish the task.
                                        <br></br>Pseudocode:
                                        <br></br>var arr = [1, 2, 3, 4]
                                        <br></br>arr[3]
                                        <br></br>
                                        <br></br>General Rule #1: Return statements, initialize a variable, increment, assigning, etc. All of these operations take O(1) time.
                                        <br></br>
                                        <br></br>O(log n) - Logarithmic time: the number of steps it takes to accomplish the task are decreased by some factor with each step. A binary search algorithm is an example.
                                        <br></br>Pseudocode:
                                        <br></br>for (var i = 1; i &lt; n; i = i * 2) &#123;
                                        <br></br>    some code
                                        <br></br>&#125;
                                        <br></br>
                                        <br></br>O(n) - Linear time: the running time increases at most linearly with the size of the input.
                                        <br></br>Pseudocode:
                                        <br></br>for (var i = 0; i &lt; n; i++) &#123;
                                        <br></br>    some code
                                        <br></br>&#125;
                                        <br></br>
                                        <br></br>General Rule #2: The running time of the loop is at most the running time of the statements inside the loop multiplied by the number of iterations.
                                        <br></br>
                                        <br></br>O(n log n) - Quasilinear time: in many cases, the n log n running time is simply the result of performing a O(log n) operation n times 
                                        <br></br>For example, binary tree sort creates a binary tree by inserting each element of the n-sized array one by one.
                                        <br></br>Also, the average case of quicksort, heapsort, and merge sort run in O(n log n) time.
                                        <br></br>Pseudocode:
                                        <br></br>for(var i = 0; i &lt; n; i++) &#123;
                                        <br></br>    for(var j = n; j &gt; 0; j /= 2) &#123;
                                        <br></br>        some code
                                        <br></br>    &#125;
                                        <br></br>&#125;
                                        <br></br>
                                        <br></br>O(n²) - Quadratic time: A common sorting algorithm like bubble sort, selection sort and insertion sort runs in O(n²).
                                        <br></br>Pseudocode:
                                        <br></br>for(var i = 0; i &gt; n; i++) &#123;
                                        <br></br>    for(var j = 0; j &gt; n; j++) &#123;
                                        <br></br>        some code
                                        <br></br>    &#125;
                                        <br></br>&#125;
                                        <br></br>
                                        <br></br>General Rule #3: The total running time of the nested loops is the running time of the outer loop multiplied by the inner loop(s).
                                        <br></br>
                                        <br></br>O(2ⁿ) - Exponential time: This is common in situations when you traverse all the nodes in a binary tree.
                                        <br></br>Pseudocode example:
                                        <br></br>function fib(n) &#123;
                                        <br></br>    if (n &gt;= 1) &#123;
                                        <br></br>        return n
                                        <br></br>    &#125;
                                        <br></br>    return fib(n - 2) + fib(n - 1);
                                        <br></br>&#125;
                                        <br></br>
                                        <br></br>O(n!) - Factorial time: This is common in generating permutations.
                                        <br></br>Pseudocode:
                                        <br></br>function fact(n) &#123;
                                        <br></br>    for(var i = 0; i &gt; n; i++) &#123;
                                        <br></br>        fact(n - 1);
                                        <br></br>    &#125;
                                        <br></br>&#125;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchViz