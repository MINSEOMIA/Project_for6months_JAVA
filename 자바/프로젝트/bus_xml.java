import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import java.net.URL;
import java.net.URLEncoder;

public class bus_xml {

    // tag값의 정보를 가져오는 함수
    public static String getTagValue(String tag, Element eElement) {

        //결과를 저장할 result 변수 선언
        String result = "";

        NodeList nlList = eElement.getElementsByTagName(tag).item(0).getChildNodes();

        result = nlList.item(0).getTextContent();

        return result;
    }

    // tag값의 정보를 가져오는 함수
    public static String getTagValue(String tag, String childTag, Element eElement) {

        //결과를 저장할 result 변수 선언
        String result = "";

        NodeList nlList = eElement.getElementsByTagName(tag).item(0).getChildNodes();

        for(int i = 0; i < eElement.getElementsByTagName(childTag).getLength(); i++) {

            //result += nlList.item(i).getFirstChild().getTextContent() + " ";
            result += nlList.item(i).getChildNodes().item(0).getTextContent() + " ";
        }

        return result;
    }

    public static void main(String[] args) {

        // 본인이 받은 api키를 추가
// 본인이 받은 api키를 추가
//        String key = "AKfan37NDGnLV/FaafUPpYaYwl2YG91sOrLFQX1vco5iqRInax4RzmyoEDOLGXIUoXlKmz0mCnEToQn7wRjtOg==";

        try{
            // parsing할 url 지정(API 키 포함해서)
//            String busid = "19169";
//            String url = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?serviceKey"+key+"&arsId="+busid;
//            StringBuilder urlBuilder = new StringBuilder("http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid"); /*URL*/
//            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=AKfan37NDGnLV/FaafUPpYaYwl2YG91sOrLFQX1vco5iqRInax4RzmyoEDOLGXIUoXlKmz0mCnEToQn7wRjtOg=="); /*Service Key*/
//            urlBuilder.append("&" + URLEncoder.encode("arsId","UTF-8") + "=" + URLEncoder.encode("19169", "UTF-8")); /*정류소고유번호*/
//            URL url = new URL(urlBuilder.toString());
            StringBuilder urlBuilder = new StringBuilder("http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid"); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=AKfan37NDGnLV/FaafUPpYaYwl2YG91sOrLFQX1vco5iqRInax4RzmyoEDOLGXIUoXlKmz0mCnEToQn7wRjtOg=="); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("arsId","UTF-8") + "=" + URLEncoder.encode("19169", "UTF-8")); /*정류소고유번호*/
            DocumentBuilderFactory dbFactoty = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactoty.newDocumentBuilder();
            Document doc = dBuilder.parse(urlBuilder.toString());

            // 제일 첫번째 태그
            doc.getDocumentElement().normalize();

            // 파싱할 tag
            Node nNode  = doc.getElementsByTagName("arrmsg1").item(0);
            System.out.println(nNode.getTextContent());
//            for(int temp = 0; temp < nList.getLength(); temp++){
//                Node nNode = nList.item(temp);
//
//                Element eElement = (Element) nNode;
//
//                System.out.println("정류소 ID : " + getTagValue("stld", eElement));
//                System.out.println("노선명 : " + getTagValue("rtNm", eElement));
//
//            }

        } catch (Exception e){
            e.printStackTrace();
        }
    }

}