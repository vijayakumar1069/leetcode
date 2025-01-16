const sum = (a, b) => {
    console.log(`a=${a}, b=${b} is sum called`);
    return a + b;
  };
  
  const memo = (func) => {
    let cache = new Map();
  
    return (...args) => {
      // Convert args array to string to use as key
      const key = JSON.stringify(args);
      
      // Check if result exists in cache
      if (cache.has(key)) {
        console.log('cache hit');
        return cache.get(key);
      }
  
      // Calculate result if not in cache
      let result = func(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  const memoization = memo(sum);
  
  console.log(memoization(1, 2));  // First call - will calculate
  console.log(memoization(1, 2));  // Second call - will use cache
  console.log(memoization(5, 7,8));  // Different args - will calculate
  