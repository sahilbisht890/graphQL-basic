import { motion } from "framer-motion";

const TodoCard = ({ todo }) => {
  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-white">{todo.todo}</h2>
      <p className="text-sm text-gray-400 mt-1">Assigned to: {todo.fullName}</p>
      <p
        className={`mt-3 text-sm font-medium ${
          todo.completed ? "text-green-400" : "text-red-400"
        }`}
      >
        {todo.completed ? "Completed ✅" : "Not Completed ❌"}
      </p>
      <motion.div
        className="mt-4 w-full bg-gray-700 rounded-full h-2"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className={`h-2 rounded-full ${
            todo.completed ? "bg-green-400" : "bg-red-400"
          }`}
          style={{ width: todo.completed ? "100%" : "0%" }}
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default TodoCard;