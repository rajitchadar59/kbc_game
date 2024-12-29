"use client"
import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/navigation';

const questions = [
  {
    id: 1,
    question: 'What is the time complexity of binary search in a sorted array?',
    options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
    correctAnswer: 'O(log n)',
  },
  {
    id: 2,
    question: 'Which data structure is used for implementing recursion?',
    options: ['Queue', 'Stack', 'Array', 'Linked List'],
    correctAnswer: 'Stack',
  },
  {
    id: 3,
    question: 'Which of the following is not a linear data structure?',
    options: ['Array', 'Linked List', 'Stack', 'Graph'],
    correctAnswer: 'Graph',
  },
  {
    id: 4,
    question: 'Which algorithm is used to find the shortest path in a graph?',
    options: ['Dijkstra’s Algorithm', 'Merge Sort', 'Binary Search', 'Bellman-Ford Algorithm'],
    correctAnswer: 'Dijkstra’s Algorithm',
  },
  {
    id: 5,
    question: 'What is the space complexity of the merge sort algorithm?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    correctAnswer: 'O(n)',
  },
  {
    id: 6,
    question: 'Which data structure is used to implement a priority queue?',
    options: ['Heap', 'Stack', 'Queue', 'Array'],
    correctAnswer: 'Heap',
  },
  {
    id: 7,
    question: 'Which traversal technique is used in Depth First Search (DFS)?',
    options: ['Level Order Traversal', 'Inorder Traversal', 'Preorder Traversal', 'Backtracking'],
    correctAnswer: 'Backtracking',
  },
  {
    id: 8,
    question: 'What is the best-case time complexity of quicksort?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n^2)'],
    correctAnswer: 'O(n log n)',
  },
  {
    id: 9,
    question: 'Which of the following is a self-balancing binary search tree?',
    options: ['Binary Search Tree', 'AVL Tree', 'Heap', 'B-Tree'],
    correctAnswer: 'AVL Tree',
  },
  {
    id: 10,
    question: 'Which algorithm is used for finding the minimum spanning tree?',
    options: ['Prim’s Algorithm', 'Merge Sort', 'Binary Search', 'Floyd-Warshall Algorithm'],
    correctAnswer: 'Prim’s Algorithm',
  },
  {
    id: 11,
    question: 'Which data structure is used in Breadth First Search (BFS)?',
    options: ['Stack', 'Queue', 'Array', 'Graph'],
    correctAnswer: 'Queue',
  },
  {
    id: 12,
    question: 'What is the height of an AVL tree with 7 nodes?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
  },
  {
    id: 13,
    question: 'Which sorting algorithm uses divide and conquer approach?',
    options: ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort'],
    correctAnswer: 'Merge Sort',
  },
  {
    id: 14,
    question: 'Which of the following data structures is suitable for LRU cache implementation?',
    options: ['Stack', 'Queue', 'HashMap + LinkedList', 'Array'],
    correctAnswer: 'HashMap + LinkedList',
  },
  {
    id: 15,
    question: 'What is the worst-case time complexity of searching in a binary search tree?',
    options: ['O(log n)', 'O(n)', 'O(n^2)', 'O(1)'],
    correctAnswer: 'O(n)',
  },
  {
    id: 16,
    question: 'Which algorithm is used to detect cycles in a graph?',
    options: ['Dijkstra’s Algorithm', 'Kruskal’s Algorithm', 'DFS', 'BFS'],
    correctAnswer: 'DFS',
  },
  {
    id: 17,
    question: 'What is the time complexity of enqueue operation in a circular queue?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
    correctAnswer: 'O(1)',
  },
  {
    id: 18,
    question: 'Which of the following is not a characteristic of dynamic programming?',
    options: ['Optimal Substructure', 'Overlapping Subproblems', 'Memoization', 'Divide and Conquer'],
    correctAnswer: 'Divide and Conquer',
  },
  {
    id: 19,
    question: 'Which of the following sorting algorithms is stable?',
    options: ['Merge Sort', 'Heap Sort', 'Quick Sort', 'Selection Sort'],
    correctAnswer: 'Merge Sort',
  },
  {
    id: 20,
    question: 'Which data structure uses LIFO (Last In First Out) principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Array'],
    correctAnswer: 'Stack',
  },
 
];






const PlayGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [money, setMoney] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const router = useRouter()
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setMoney(money + 3500000);
      setShowCongrats(true);  // Show congratulatory message on correct answer
    } else {
      setIsGameOver(true)
      setShowCongrats(false);  // Hide if the answer is incorrect
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsGameOver(false);
    setMoney(0);
    setShowCongrats(false);
  };
 
   const handleexit = ()=>{
    router.push("/")
   }
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-[#362048] text-white my-16">
      
      <div className="flex">
      <img src="kbc.jpg" className=" w-14 h-14  " alt="logo" />
      <p className='mt-2 text-slate-500 text-4xl font-bold'> kon banega crorpati</p>
      <img src="kbc.jpg" className=" w-14 h-14  " alt="logo" />
      </div>
      {!isGameOver ? (
        <div className="">
          <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-6">Q. {questions[currentQuestion].question}</h2>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {showCongrats && (
              <p className="text-green-500 mt-4">Congratulations! You Won: ₹{money}</p>
            )}
          </div>

          <div className="flex w-full max-w-2xl gap-4 mt-4">
            <button
              onClick={() => setIsGameOver(true)}
              className="w-1/2 p-2 bg-red-500 rounded text-white font-bold"
            >
              Quit
            </button>
            <button
              onClick={restartGame}
              className="w-1/2 p-2 bg-orange-500 rounded text-white font-bold"
            >
              Restart
            </button>
          </div>
        
         <div className="flex justify-center items-center">
         <button
              onClick={()=>{handleexit()}}
              className="w-1/2 p-2 bg-pink-500 rounded text-white my-10  font-bold"
            >
            Exit
            </button>
         </div>

          
        </div>
      ) : (
        <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Game Over!</h2>
          <p className="text-xl mb-2">Your Score: {score}/{questions.length}</p>
          
          <p className="text-xl mb-2">Your Total Won: ₹{money}</p>
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            onClick={restartGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayGame;
