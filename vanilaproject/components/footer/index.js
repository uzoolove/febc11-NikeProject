class NikeFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    font-family: 'Helvetica', Arial, sans-serif;
                    --text-color: #7e7e7e;
                    --bg-color: #111;
                }
                .footer {                    
                    color: #fff;
                    padding: 40px 0px;
                    border-top: 1px solid #E5E5E5;
                    margin: 0px 24px;
                }
                .footer-content {                    
                    margin: 0 auto;
                }
                .footer-section {
                    margin-bottom: 20px;
                }
                .footer-section h3 {
                    color: var(--111111, #111);
                    font-family: "Noto Sans KR";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24.5px;
                    cursor: pointer;
                    margin-bottom: 31.75px;
                }
                .footer-section ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
                .footer-section ul li {
                    margin-bottom: 12px;
                }
                .footer-section ul li a {                    
                    text-decoration: none;
                    color: var(--707072, #707072);
                    font-family: "Noto Sans KR";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24.5px;
                }
                .footer-bottom {
                    padding-top: 20px;
                    font-size: 12px;
                    color: var(--text-color);
                }
                .footer-bottom-links a {                    
                    text-decoration: none;
                    display: block;
                    margin-bottom: 10px;
                    color: var(--707072, #707072);
                    font-family: "Noto Sans KR";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24.5px; 
                }
                .company-info {
                    margin-top: 20px;
                    color: var(--707072, #707072);
                    font-family: "Noto Sans KR";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24.5px; 
                }
                .toggle-icon::after {
                    background: url(../../assets/arrowBottom.svg) no-repeat 0px 0px;      
                    content: "";    
                    display: inline-block;
                    float: right;
                    transition: transform 0.3s ease;
                    width: 24px;
                    height: 24px;
                }
                .footer-section.active .toggle-icon::after {
                    transform: rotate(180deg);
                }
                .footer-section ul {
                    display: none;
                }
                .footer-section.active ul {
                    display: block;
                }

                @media (min-width: 768px) {
                    .footer {
                        margin: 0px 48px;                 
                    }
                    .footer-content {
                        display: flex;
                        justify-content: space-between;
                    }
                    .footer-section {
                        flex: 1;
                    }
                    .footer-section h3 {
                        cursor: default;
                    }
                    .footer-section ul {
                        display: block;
                    }
                    .toggle-icon::after {
                        display: none;
                    }
                    .footer-bottom-links {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .footer-bottom-links a {
                        margin-right: 20px;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3><span class="toggle-icon"></span>안내</h3>
                        <ul>
                            <li><a href="#">멤버가입</a></li>
                            <li><a href="#">매장안내</a></li>
                            <li><a href="#">나이키 저널</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3><span class="toggle-icon"></span>고객센터</h3>
                        <ul>
                            <li><a href="#">주문배송조회</a></li>
                            <li><a href="#">반품 정책</a></li>
                            <li><a href="#">결제 방법</a></li>
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">문의하기</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3><span class="toggle-icon"></span>회사소개</h3>
                        <ul>
                            <li><a href="#">About Nike</a></li>
                            <li><a href="#">소식</a></li>
                            <li><a href="#">채용</a></li>
                            <li><a href="#">투자자</a></li>
                            <li><a href="#">지속가능성</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">                    
                    <div class="footer-bottom-links">
                    <a href="#">© 2024 Nike, Inc. All Rights Reserved</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보처리방침</a>
                        <a href="#">위치 기반 서비스 약관</a>
                        <a href="#">영상정보처리기기 운영 방침</a>
                    </div>
                    <div class="company-info">
                        (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068 사업자 정보 확인<br>
                        고객센터 전화 문의 080-022-0182 FAX 02-6744-5880 | 이메일 service@nike.com | 호스팅서비스사업자 (유)나이키코리아
                    </div>
                </div>
            </footer>
        `;
    }

    setupEventListeners() {
        const sections = this.shadowRoot.querySelectorAll('.footer-section');
        sections.forEach(section => {
            const title = section.querySelector('h3');
            title.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    section.classList.toggle('active');
                }
            });
        });
    }
}

customElements.define('nike-footer', NikeFooter);