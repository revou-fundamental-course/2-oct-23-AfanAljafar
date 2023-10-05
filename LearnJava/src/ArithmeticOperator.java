import java.util.Scanner;

public class ArithmeticOperator {
    public static void main(String[] args) {

        int num1, num2, res;

        num1 = 2;
        num2 = 3;

        res = num1 + num2;

        System.out.println(res);

        Scanner sc = new Scanner(System.in);
        System.out.print("enter first number : ");
        int a = sc.nextInt();
        System.out.print("enter second number : ");
        int b = sc.nextInt();
        int c = a + b;

        System.out.println("result : " + c);
    }
}
