import React from "react";
import styles from "./last.css";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_OPENAI_API_KEY; // <- API KEY 입력

import { useLocation } from "react-router-dom";
export default function Lastpage() {
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const { state } = useLocation();
  console.log("마지막 페이지 : ", { nickName }, { message });

  const nickName = state ? state.nickName : null;
  const story = state ? state.message : null;
  const emotion = "분노"; // Replace with actual emotion
  const baseNote = "파츌리";
  const middleNote = "로즈우드";
  const topNote = "블랙베리";

  useEffect(() => {
    const fetchPerfumeName = async () => {
      setLoading(true);
      const messages = [
        {
          role: "system",
          content: `이 프롬프트에서 너는 한국의 감성적인 조향사야. 내가 세개의 향료 이름을 넘겨주면 향수 이름과  어울리는 심상(계절, 장소, 색깔, 동물, 후각, 시각, 청각 등등) 단어 몇가지를 내놓아줘. 그 다음으로, 내가 사연과 감정을 넘겨줄 건데 만들어진 향수가 긍정적인 감정은 오랫동안 기억되게, 부정적인 감정을 승화시킬 수 있다는 내용을 연결지어 출력해줘.
        다른 설명은 전혀 내놓지 말고, 내가 요구한 내용에 대한 답만 순서대로 말해줘. 출력 형식은 아래와 같아.
        향수 이름: 
        어울리는 이미지: 
        설명과 감정 연결:
        `,
        },
        {
          role: "user",
          content: `베이스 노트: '${baseNote}', 미들 노트: '${middleNote}', 탑 노트: '${topNote}'
          사용자의 사연: '${story}', 감정: '${emotion}'`,
        },
      ];

      const data = {
        model: "gpt-4-1106-preview",
        temperature: 0.7,
        n: 1,
        messages: messages,
      };

      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + api_key, // Ensure api_key is defined and accessible
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const responseData = await response.json();
        setResponseText(responseData.choices[0].message.content);
        setShowResponse(true);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchPerfumeName();
  }, []);

  const parseResponse = (text) => {
    const parsed = {
      perfumeName: "",
      image: "",
      description: "",
    };

    // 정규 표현식을 사용하여 텍스트 파싱
    const nameMatch = text.match(/향수 이름: ([^\n]+)/);
    const imageMatch = text.match(/어울리는 이미지: ([^\n]+)/);
    const descriptionMatch = text.match(/설명과 감정 연결: ([^\n]+)/);

    if (nameMatch) parsed.perfumeName = nameMatch[1];
    if (imageMatch) parsed.image = imageMatch[1];
    if (descriptionMatch) parsed.description = descriptionMatch[1];

    return parsed;
  };

  const { perfumeName, image, description } = parseResponse(responseText);

  return (
    <div>
      <Nav />
      <div className="Lastpagediv">
        <div className="lastmain">
          <div className="lastmaindiv">
            <img
              className="lastimg"
              src="https://assets-global.website-files.com/5c34b6b890599d7dd2b3f60d/5cad630751e5f8bd0af6889f_bottle%20copy.gif"
              alt="lastimg"
            />
            <div className="choicediv">
              <h3 className="finish">향수 제작이 완료되었어요!</h3>
              <h3 className="choicetxt">
                Base : {baseNote}
                <br></br>
                Mid : {middleNote}
                <br></br>
                TOP : {topNote}
              </h3>
              <h3 className="nickgo">
                {nickName}에게 향수 이름을 추천해드릴게요!
              </h3>
            </div>
          </div>
          <div>
            <div className="lasttxtdiv">
              <h2 className="lasttxt">" {perfumeName} "</h2>
            </div>
            <div className="perfumetxtdiv">
              <h5 className="perfumetxt">{image}</h5>
              <h5 className="perfumetxt">{description}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
