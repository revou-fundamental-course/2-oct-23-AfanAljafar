import java.util.Scanner;

public class ArithmeticOpertationUsingArrayVariable {
    public static void main(String[] args) {
        int[] num1 = new int[10];
        int[] num2 = new int[10];
        int[] res = new int[10];

        num1[0] = 2;
        num2[0] = 3;

        res[0] = num1[0] + num2[0];

        System.out.println(res[0]);

        Scanner sc = new Scanner(System.in);
        //addition operation
        System.out.println("==============================================");
        System.out.println("addition operation");
        System.out.println("==============================================");
        System.out.print("enter first number : ");
        num1[1] = sc.nextInt();
        System.out.print("enter second number : ");
        num2[1] = sc.nextInt();
        res[1] = num1[1] + num2[1];
        System.out.println("result :" + res[1]);

        //reduction operation
        System.out.println("==============================================");
        System.out.println("reduction operation");
        System.out.println("==============================================");
        System.out.print("enter first number : ");
        num1[2] = sc.nextInt();
        System.out.print("enter second number : ");
        num2[2] = sc.nextInt();
        res[2] = num1[2] - num2[2];
        System.out.println("result :" + res[2]);


    }
}
