import React from "react";
import "../about/about.css";
import cb from "../../img/aboutcb.jpg";

export default function About() {
    return(
        <div className="about mx-auto">
            <div className="sb_about">
            <div className="about-img">
                <img src={cb} alt="" srcset="" />
            </div>
            <div className="sb_about-text">
                <h1>NHỮNG CÂU CHUYỆN HAY</h1>
                <p className="text">
                Trong một góc phố nhỏ, có một cửa hàng mèo tên là "PawPet". Chủ nhân của cửa hàng là một người đam mê mèo và đã dành nhiều năm chăm sóc và nuôi dưỡng những chú mèo độc đáo.

Mỗi chú mèo trong cửa hàng đều có một câu chuyện riêng biệt. Có mèo được cứu sống từ đường phố, có mèo từ những ngôi nhà không thể giữ chúng nữa, và còn có những chú mèo mang theo những câu chuyện vui nhộn từ quê hương xa xôi. Mọi người trong của hàng tận tâm chăm sóc từng chú mèo, tạo nên một cộng đồng mèo hòa mình vào không gian ấm cúng và yên bình của cửa hàng.

Khách hàng khi đến "PawPet" không chỉ mua được những chú mèo đáng yêu mà còn được trải nghiệm không khí thư giãn và hạnh phúc. Ngoài ra khách hàng còn được chia sẻ kiến thức về việc chăm sóc mèo và đưa ra những lời khuyên hữu ích cho những người mới sở hữu mèo.
                </p>
            </div>
            </div>
        </div>
        
)
}
