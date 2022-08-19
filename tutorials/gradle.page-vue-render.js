
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('p',[_v("The following video (from the Intellij team) gives a quick overview of various ways Gradle can be used within Intellij.\nA quick watch of it may be useful before diving into specific use cases explained in the subsequent sections in this page.")]),_v(" "),_m(7),_v(" "),_c('p'),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("If the Gradle tasks don't appear in the Gradle window, click the 'refresh' button in the toolbar to reimport the Gradle project.")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_c('p',[_v("Alternatively, you can type the command in the terminal.")]),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('box',[_c('p',[_c('span',{staticClass:"badge rounded-pill bg-warning"},[_c('span',{staticClass:"fas fa-lightbulb",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('strong',[_v("You can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" to prevent Gradle from skipping tasks")]),_v(": When running a Gradle task, Gradle will try to figure out if the task needs running at all. If Gradle determines that the output of the task will be same as the previous time, it will not run the task. For example, it will not build the JAR file again if the relevant source files have not changed since the last time the JAR file was built. If you want to force Gradle to run a task, you can combine that task with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean shadowJar")]),_v("). Once the build files have been "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" ed, Gradle has no way to determine if the output will be same as before, and it will have no choice but to execute the task.")])]),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_c('span',{attrs:{"id":"section-creating-jar-files"}},[_m(36),_v(" "),_c('div',{staticClass:"indented-level2"},[_c('panel',{attrs:{"minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-log-in",attrs:{"aria-hidden":"true"}})]),_v(" Tutorials → Working with JAR files → "),_c('strong',[_v("Fat JAR files")])])]},proxy:true}])},[_v(" "),_c('div',[_c('p',[_c('strong',[_v("A normal JAR file contains only the classes and resources that you created for your app.")]),_v(" If you app has "),_c('em',[_v("dependencies")]),_v(" (i.e., third party libraries that your app depends on), the JAR file will not work unless the person running the JAR file also has those dependencies in their computer. This is not ideal.")]),_v(" "),_c('p',[_c('strong',[_v("A "),_c('em',[_v("fat")]),_v(" JAR (aka "),_c('em',[_v("uber")]),_v(" JAR) file solves the above problem by including all the dependencies inside the JAR file")]),_v(" itself "),_c('span',{staticClass:"dimmed"},[_v("(which makes the JAR file bigger than usual, hence the term "),_c('em',[_v("fat")]),_v(")")]),_v(".")])])])],1),_v(" "),_c('p'),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_c('div',{staticClass:"indented-level2"},[_c('panel',{attrs:{"minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-log-in",attrs:{"aria-hidden":"true"}})]),_v(" Tutorials → JavaFX Tutorial Part 1 → If you are using Gradle")])]},proxy:true}])},[_v(" "),_c('div',[_c('p',[_v("Update your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" to include the following lines:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("repositories {\n")]),_c('span',[_v("    mavenCentral()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("dependencies {\n")]),_c('span',[_v("    String javaFxVersion = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'11'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Alternatively, you can follow the approach mentioned in "),_c('a',{attrs:{"href":"https://openjfx.io/openjfx-docs/#gradle"}},[_v("this tutorial")]),_v(".")])])])],1),_v(" "),_c('p'),_v(" "),_m(40),_v(" "),_m(41)]),_v(" "),_m(42),_v(" "),_c('p',[_v("There is no need to run these Gradle tasks manually as they are called automatically by other relevant Gradle tasks.")]),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_m(49),_m(50),_v(" "),_m(51),_m(52),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_c('hr'),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#gradle-tutorial"}},[_v("Gradle tutorial‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#basics"}},[_v("Basics‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#gradle-within-intellij-an-overview"}},[_v("Gradle within Intellij: an overview‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-gradle-to-the-project"}},[_v("Adding Gradle to the project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-gradle-in-intellij-idea"}},[_v("Using Gradle in Intellij IDEA‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-gradle-tasks"}},[_v("Running Gradle Tasks‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-plugins"}},[_v("Adding plugins‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-gradle-to-do-some-common-project-activities"}},[_v("Using Gradle to do some common project activities‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#cleaning-the-project"}},[_v("Cleaning the project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-checkstyle"}},[_v("Running Checkstyle‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-tests"}},[_v("Running tests‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#creating-jar-files"}},[_v("Creating JAR files‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#compiling"}},[_v("Compiling‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#enabling-assertions"}},[_v("Enabling assertions‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#managing-dependencies"}},[_v("Managing dependencies‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)])],1),_v(" "),_m(57)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"gradle-tutorial"}},[_c('span',{staticClass:"anchor",attrs:{"id":"gradle-tutorial"}}),_v("Gradle tutorial"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle-tutorial","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Gradle is a "),_c('em',[_v("build automation tool")]),_v(" used to automate build processes. There are many ways of integrating Gradle into a project. This tutorial uses the "),_c('em',[_v("Gradle wrapper")]),_v(" approach.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"basics"}},[_c('span',{staticClass:"anchor",attrs:{"id":"basics"}}),_v("Basics"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#basics","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You use a "),_c('em',[_v("build file")]),_v(" (named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(") to describe the project to Gradle. A build file mainly consists of "),_c('em',[_v("plugins")]),_v(", "),_c('em',[_v("tasks")]),_v(" and "),_c('em',[_v("properties")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Plugins")]),_v(" extend the functionality of Gradle. For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java")]),_v(" plugin adds support for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Java")]),_v(" projects.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Tasks")]),_v(" are reusable blocks of logic. For example, the task "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" simply deletes the project build directory.\nTasks can be composed of, or dependent on, other tasks.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Properties")]),_v(" change the behavior of tasks. For instance, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClassName")]),_v(" of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("application")]),_v(" plugin is a compulsory property which tells Gradle which class is the entry point to your application. As Gradle favors "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Convention_over_configuration"}},[_c('em',[_v("convention over configuration")])]),_v(", there is not much to you need to configure if you follow the recommended directory structure.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"gradle-within-intellij-an-overview"}},[_c('span',{staticClass:"anchor",attrs:{"id":"gradle-within-intellij-an-overview"}}),_v("Gradle within Intellij: an overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle-within-intellij-an-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"block-embed block-embed-service-youtube",staticStyle:{"position":"relative","padding-bottom":"60.9375%"}},[_c('iframe',{attrs:{"type":"text/html","src":"//www.youtube.com/embed/6V6G3RyxEMk","frameborder":"0","webkitallowfullscreen":"","mozallowfullscreen":"","allowfullscreen":""}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"adding-gradle-to-the-project"}},[_c('span',{staticClass:"anchor",attrs:{"id":"adding-gradle-to-the-project"}}),_v("Adding Gradle to the project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-gradle-to-the-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Scenario 1:")])]),_v(" You are setting up a project in Intellij IDEA. The project already has Gradle support.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"ml-3"},[_c('p',[_c('span',{staticClass:"badge rounded-pill bg-warning"},[_c('span',{staticClass:"fas fa-lightbulb",attrs:{"aria-hidden":"true"}})]),_v(" If the project comes with Gradle support, you will see a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file in your project root.")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Open Intellij (if you are not in the welcome screen, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Close Project")]),_v(" to close the existing project first)")]),_v(" "),_c('li',[_v("Open the project into Intellij as follows:\n"),_c('ol',[_c('li',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Open")]),_v(".")]),_v(" "),_c('li',[_v("Select the project directory, and click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")]),_v(".")]),_v(" "),_c('li',[_v("If there are any further prompts, accept the defaults.")])])]),_v(" "),_c('li',[_v("After the importing of the project is complete, you will see the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle Toolbar")]),_v(" in the IDEA interface "),_c('span',{staticClass:"dimmed"},[_v("e.g., look for the elephant icon (on Windows, this appears on the right-edge of the IDE window) and click it")]),_v("."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/gradle/GradleIcon.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/gradle/GradleIcon.png","alt":""}})])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Scenario 2:")])]),_v(" You are adding Gradle support to an ongoing project that is already set up in Intellij IDEA. Gradle wrapper files have been provided.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Add the Gradle wrapper files to the project. e.g., if they are in a separate branch, merge that branch.")]),_v(" "),_c('li',[_v("Close the IDEA project if it is open.")]),_v(" "),_c('li',[_v("Delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".idea")]),_v(" folder.")]),_v(" "),_c('li',[_v("Open/import the project again, as explained in scenario 1 above.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Scenario 3:")])]),_v(" You are adding Gradle support to an ongoing project from scratch.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/gradle_wrapper.html"}},[_v("This")]),_v(" is a good place to start.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-gradle-in-intellij-idea"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-gradle-in-intellij-idea"}}),_v("Using Gradle in Intellij IDEA"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-gradle-in-intellij-idea","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Intellij uses Gradle to run your application by default. If you would like to run the project in the normal way, go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" and change the following settings:"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/gradle/intellijRunUsingGradle.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/gradle/intellijRunUsingGradle.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"running-gradle-tasks"}},[_c('span',{staticClass:"anchor",attrs:{"id":"running-gradle-tasks"}}),_v("Running Gradle Tasks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-gradle-tasks","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To run a task, locate the task in the Gradle toolbar, right-click on a task, and choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("run")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("On Windows: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew <task1> <task2> …")]),_v("​ e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew clean test")])]),_v(" "),_c('li',[_v("On Mac/Linux: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew <task1> <task2> …")]),_v("​ e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean test")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"adding-plugins"}},[_c('span',{staticClass:"anchor",attrs:{"id":"adding-plugins"}}),_v("Adding plugins"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-plugins","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Gradle plugins are reusable units of build logic. Most common build tasks are bundled into core plugins provided by Gradle. Java, Checkstyle, and Shadow are three of plugins commonly used in Java projects.\nThe relevant lines of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" are given below:")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("plugins {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'java'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'application'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'checkstyle'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'com.github.johnrengelman.shadow'")]),_v(" version "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'5.1.0'")])]),_v("\n")]),_c('span',[_v("}\n")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-gradle-to-do-some-common-project-activities"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-gradle-to-do-some-common-project-activities"}}),_v("Using Gradle to do some common project activities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-gradle-to-do-some-common-project-activities","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"cleaning-the-project"}},[_c('span',{staticClass:"anchor",attrs:{"id":"cleaning-the-project"}}),_v("Cleaning the project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cleaning-the-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")])]),_v(": Deletes the files created during the previous build tasks (e.g. files in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build")]),_v(" folder)."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"running-checkstyle"}},[_c('span',{staticClass:"anchor",attrs:{"id":"running-checkstyle"}}),_v("Running Checkstyle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-checkstyle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew checkstyleMain checkstyleTest")]),_v(": runs main code and test code complies with the Checkstyle rules. "),_c('br')])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Resources")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/guides/tutorials/checkstyle.html"}},[_v("Checkstyle Tutorial")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/checkstyle_plugin.html"}},[_v("Gradle documentation for the Checkstyle plugin")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"running-tests"}},[_c('span',{staticClass:"anchor",attrs:{"id":"running-tests"}}),_v("Running tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-tests","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" task to run the tests in the project.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Resources")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/java_testing.html#using_junit5"}},[_v("Gradle documentation for JUnit")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"creating-jar-files"}},[_c('span',{staticClass:"anchor",attrs:{"id":"creating-jar-files"}}),_v("Creating JAR files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-jar-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://github.com/johnrengelman/shadow"}},[_v("Shadow")]),_v(" is a plugin that packages an application into an executable "),_c('em',[_v("fat")]),_v(" jar file "),_c('em',[_v("if the current file is outdated")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The task "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("shadowJar")])]),_v(" (e.g., running the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew shadowJar")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew clean shadowJar")]),_v(") creates the JAR file in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build/libs")]),_v(" folder. By default, it produces a jar file with the name in the format of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{archiveBaseName}-{archiveVersion}.jar")]),_v(" and put it in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("builds/libs")]),_v(" folder. These properties can be set in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})]),_v(" Ensure your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file contains the correct values w.r.t. the Shadow plugin e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClassName")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})]),_v(" If you are using JavaFX, see the panel below to find what else you need to add to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" to pack JavaFX libraries into the generated JAR file.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Resources")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://plugins.gradle.org/plugin/com.github.johnrengelman.shadow"}},[_v("Gradle documentation for the Shadow plugin")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://imperceptiblethoughts.com/shadow/introduction/"}},[_v("More about the Shadow plugin")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"compiling"}},[_c('span',{staticClass:"anchor",attrs:{"id":"compiling"}}),_v("Compiling"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#compiling","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compileJava")])]),_v(": Checks whether the project has the required dependencies to compile and run the main program, and download any missing dependencies before compiling the classes. See "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("allprojects")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dependencies")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compile")]),_v(" for the list of dependencies required.")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compileTestJava")])]),_v(": Checks whether the project has the required dependencies to perform testing, and download any missing dependencies before compiling the test classes. See "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("allprojects")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dependencies")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("testCompile")]),_v(" for the list of dependencies required.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"enabling-assertions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"enabling-assertions"}}),_v("Enabling assertions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#enabling-assertions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To enable assertions when executing Java code, add the following to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("run {\n")]),_c('span',[_v("    enableAssertions = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"managing-dependencies"}},[_c('span',{staticClass:"anchor",attrs:{"id":"managing-dependencies"}}),_v("Managing dependencies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#managing-dependencies","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Gradle can automate the management of dependencies to third-party libraries. You just need to add the dependency into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file and Gradle will do the rest. For example, here is how the JUnit library has been added to the dependencies in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("dependencies {\n")]),_c('span',[_v("    testImplementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.junit.jupiter'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'junit-jupiter-api'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'5.5.0'")]),_v("\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, to add the Natty (a third-party library used for parsing natural language dates e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")]),_v("), you simply have to add the following line to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dependencies")]),_v(" section of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("compile "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'com.joestelmach'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'natty'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'0.6'")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Tip: Most third-party libraries specify how to add it as a Gradle dependency ("),_c('a',{attrs:{"href":"https://mvnrepository.com/artifact/com.joestelmach/natty/0.6"}},[_v("example")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"resources"}},[_c('span',{staticClass:"anchor",attrs:{"id":"resources"}}),_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/userguide.html"}},[_v("Official Gradle Documentation")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.1")]),_v(" on Fri, 19 Aug 2022, 22:37:15 GMT+8]")])])])}
}];
  