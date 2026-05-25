class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for val in tokens:
            print(stack)
            if val == '+':
                stack.append(stack.pop() + stack.pop())
            elif val == '*':
                stack.append(stack.pop() * stack.pop())
            elif val == '-':
                b = stack.pop()
                a = stack.pop()
                stack.append(a - b)
            elif val == '/':
                b = stack.pop()
                a = stack.pop()
                print(f"{a} / {b}")
                stack.append(math.trunc(a / b))
            else:
                stack.append(int(val))

        return stack.pop()