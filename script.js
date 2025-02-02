function translateToChinese() {
    document.body.innerHTML = `
        <header>
            <a href="#home">
                <img src="images/SCORE2.png" class="logo">
            </a>
            <nav>
                <ul>
                    <li><a href="#home">首页</a></li>
                    <li><a href="#about">关于我们</a></li>
                    <li><a href="#services">我们的服务</a></li>
                    <li><a href="#ourteam">我们的团队</a></li>
                    <li><a href="#testimonials">客户评价</a></li>
                    <li><a href="#contact">联系方式</a></li>
                </ul>
            </nav>
        </header>

        <section class="hero" id="home">
            <h1>欢迎来到Studicore辅导</h1>
            <p>我们是一个获得财政支持的501(c)(3)非营利组织，为全球K-8学生提供免费的学术支持！</p>
            <button class="cta-btn" onclick="location.href='#contact'">立即开始</button>
        </section>

        <section class="section" id="about">
            <h2>关于我们</h2>
            <div class="white-box">
                <p>Studicore辅导是一个获得财政支持的501(c)(3)非营利组织，致力于通过个性化辅导和指导来赋能K-8学生。我们提供核心科目的可及学术支持，如阅读、数学和科学，帮助年轻学习者建立信心，增强技能，实现学业成功。我们的所有项目都是完全免费的，我们努力创造一个积极和包容的学习环境，培养对学习的热爱，并为学生提供他们需要的工具，以达到他们的全部潜力。</p>
            </div>
        </section>

        <section class="section" id="services">
            <h2>我们的服务</h2>
            <div class="services-grid">
                <div class="service-item">
                    <h3>数学辅导</h3>
                    <p>我们提供个性化的辅导课程，针对每个学生的学习风格和节奏，专注于基础概念、复杂问题解决策略和数学的实际应用。我们的目标是培养信心和对从基础算术到高级微积分等主题的深刻理解。</p>
                </div>
                <div class="service-item">
                    <h3>科学辅导</h3>
                    <p>我们的科学辅导服务旨在引导学生探索生物、化学和物理的迷人世界。我们专注于动手学习技术、互动解释和现实生活示例，帮助学生掌握具有挑战性的概念，在学校中表现出色，并培养对科学发现的终身欣赏。</p>
                </div>
                <div class="service-item">
                    <h3>语言艺术辅导</h3>
                    <p>我们提供全面的支持，帮助学生增强阅读、写作和语言理解能力。无论是改善语法、发展批判性阅读能力，还是完善写作技巧，我们的课程旨在提升学业表现和增强个人沟通能力。</p>
                </div>
            </div>
        </section>

        <section class="section" id="ourteam">
            <h2>我们的团队</h2>
            <div class="team-members">
                <div class="team-member">
                    <img src="images/FangJason.png">
                    <h3>Jason Fang / 子健</h3>
                    <p>项目总监</p>
                </div>
                <div class="team-member">
                    <img src="images/ChenKloe.jpg">
                    <h3>Kloe Chen / 贞瑾</h3>
                    <p>项目经理</p>
                </div>
            </div>
            <div class="view-tutors-btn-container">
                <a href="/tutors/" class="cta-btn">查看我们所有的导师</a>
            </div>
        </section>

        <section class="section" id="testimonials">
            <h2>客户评价</h2>
            <div class="testimonials">
                <div class="testimonial">
                    <p>“Studicore Tutoring 简直是救星！我从勉强及格（所有课程成绩均为 C）到在下一学期保持了完美的 A，最棒的是，他们完全免费提供帮助！！我向所有人推荐这个组织！”</p>
                    <cite>- Jenny L., 中学生</cite>
                </div>
                <div class="testimonial">
                    <p>“我的孩子原本在六年级数学课上很吃力，但这里的课程帮助他对数学有了更多的信心。我试过很多付费辅导老师，但他们似乎都无法帮助他，但 Studicore 辅导对我们来说是一种福音。”</p>
                    <cite>- Mark 和 Laura P., 父母</cite>
                </div>
                <div class="testimonial">
                    <p>“我非常感谢 Studicore Tutoring 帮助我儿子做好上高中的准备。暑假刚开始，我儿子就对从初中到高中的过渡感到非常紧张，但在从这些导师那里获得一些知识和准备后，他很快就进入了新学年！”</p>
                    <cite>- David 和 Chloe T., 父母</cite>
                </div>
            </div>
        </section>

        <section class="section" id="contact">
            <h2>联系方式</h2>
            <p>发送感兴趣的信息以安排免费的咨询！</p>
            <form action="https://formsubmit.co/studicoretutoring@gmail.com" method="POST">
                <div class="form-group">
                    <label for="name">姓名: </label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">电子邮件: </label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">留言: </label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <input type="hidden" name="_next" value="https://your-website.com/thank-you.html"> 
                <button type="submit" class="cta-btn">发送留言</button>
            </form>
        </section>

        <footer>
            <p>&copy; 2025 Studicore 辅导。保留所有权利。</p>
        </footer>
    `;
}

function dismissPopup() {
    document.getElementById('popup').style.display = 'none';
}
