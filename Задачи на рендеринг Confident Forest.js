/// Задача Test1 ////////////////////////////////////////////////////////////////////////////////////
export const Test1 = () => {
  /// ...

  return (
    <div>
      <Counter name="A" value={counterA} />
      <Counter name="B" value={counterB} />
      /// ...
    </div>
  );
};

// Решение: оборачиваем компонент Counter в React.memo()

const Counter = React.memo(({ name, value }) => {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      {name}: {value}
    </div>
  );
});

// Теперь компонент <Counter /> будет рендериться ТОЛЬКО при изменении его props ( ...value={counterA})

/// Задача Test2 ////////////////////////////////////////////////////////////////////////////////////
// Решение:
// 1. Оборачиваем компонент <Counter /> в React.memo()

const Counter = React.memo(({ name, value, onClickIncrement }) => {
  ...
});
  
//   Теперь компонент <Counter /> будет рендериться ТОЛЬКО при изменении его props   {name, value, onClickIncrement} 
  
// 2. Оборачиваем функцию, которую мы передаём в качестве props в <Counter />, в useCallback(), чтобы при   
// перерендеринге родительского компонента не создавалась каждый раз новая функция. 
  
  const onClickA = useCallback(
    () => setCounterA((counterA) => counterA + 1),
    []
  );  
  
 // Передаём функцию onClickA в качестве props в компонент < Counter />
  
<Counter name="A" value={counterA} onClickIncrement={onClickA} />
  
 // Теперь <Counter /> будет рендериться заново только при изменении counterA в state родительского компонента. 
