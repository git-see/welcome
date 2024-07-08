<!-- FORM -->
<section id="sectionForm">
    <div></div>
    <h2>Form</h2>

    <form id="form" method="post" action="../database/treatment_form.php">
        <p>Please, leave a message here</p>
        <div>
            <div id="bodyForm">
                <div id="left">
                    <div class="group">
                        <label for="agency">Name of your agency</label>
                        <input type="text" id="agency" name="agency" placeholder="Example_58" autocomplete="off" pattern="[\w\d]{2,100}" required>
                    </div>
                    <div class="group">
                        <label for="lastname">Your name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="John-Joe" autocomplete="off" pattern="[A-Za-z-]{2,100}" required>
                    </div>
                    <div class="group">
                        <label for="email">Your email</label>
                        <input type="email" id="email" name="email" placeholder="example@example.com" autocomplete="off" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required>
                    </div>
                </div>

                <div id="right">
                    <div class="group">
                        <label for="contentMsg">Message</label>
                        <textarea placeholder="Your message..." id="contentMsg" name="contentMsg" maxlength="500" required></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerForm" text-align="center">
            <button type="submit" name="sendMsg">Envoyer le message</button>
        </div>
    </form>
</section>