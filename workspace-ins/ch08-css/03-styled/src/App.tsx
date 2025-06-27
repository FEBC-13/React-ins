import Button from "@/components/ui/Button";

function App(){
  return (
    <>
      <h1>03 Styled Components</h1>

      <Button type="button">기본 버튼</Button>
      <Button type="button" variant="cancel">취소 버튼</Button>
      <Button type="submit" $bg="gray" $color="blue" $size="20px">submit 버튼</Button>

    </>
  );
}

export default App;