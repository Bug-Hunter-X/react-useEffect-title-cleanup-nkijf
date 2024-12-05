```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly setting state with cleanup function
    const setTitle = () => {
       document.title = `You clicked ${count} times`;
    };
    setTitle();
    return () => {
      // Cleanup function to reset the title when the component unmounts
      document.title = 'Original Title';
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```