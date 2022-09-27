package hello;

public class TypeTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 정수타입
		byte a = 10; //자동 형변환. 
		a = 11; //변수는 값 변경이 가능
		a = 12;
		//a = "asdf"; //변수의 선언한 타입 값으로 할당
		short b = 20;//자동 형변환. 
		int c = 30; // 타입 변수명; => 메모리 할당
		long d = 40l;

		// 실수타입
		//float e =  (float) 31.143;  //형변환
		float e =   31.143f;  //형변환
		double f = 23.346;

		// 문자타입
		char g = 'a';
		String h = "apple"; // 객체 타입

		// 불린타입
		boolean i = true;
		boolean j = 10>20;

		System.out.println("a:" + a);
		System.out.println("b:" + b);
		System.out.println("c:" + c);
		System.out.println("d:" + d);
		System.out.println("e:" + e);
		System.out.println("f:" + f);
		System.out.println("g:" + g);
		System.out.println("h:" + h);
		System.out.println("i:" + i);
		System.out.println("j:" + j);
	}

}
