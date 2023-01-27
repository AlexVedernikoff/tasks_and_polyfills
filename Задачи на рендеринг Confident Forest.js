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

// Решение: оборачиваем компонент Counter в React.memo

const Counter = React.memo(({ name, value }) => {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      {name}: {value}
    </div>
  );
});

// Теперь компонент <Counter /> будет рендериться ТОЛЬКО при изменении его props ( ...value={counterA})
