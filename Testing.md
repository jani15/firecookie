How you can run tests to verify Firecookie extension.

# Introduction #

Automated Firecookie tests are based on <a href='http://getfirebug.com/wiki/index.php/Firebug_Tests'>Firebug Test Harness</a>.

Manual tests with description are available <a href='http://www.janodvarko.cz/firecookie/tests/'>here</a>

# Details #

Follow these steps to run automated tests:
  * Install <a href='https://addons.mozilla.org/en-US/firefox/addon/1843/'>Firebug</a>
  * Install <a href='http://getfirebug.com/releases/fbtest/1.6/'>FBTest</a> _Firebug Test Console_
  * Install <a href='http://www.softwareishard.com/firecookie/archive/'>Firecookie</a>
  * Load `chrome://firecookie/content/testList.html` into the test console.
  * Press **Run All** button in the test console.

See also <a href='http://getfirebug.com/wiki/index.php/Running_Automated_Test_Suite'>Running Automated Test Suite</a>.



_Automated test drivers are **not** included in XPIs that are available on_<a href='https://addons.mozilla.org/en-US/firefox/addon/6683/'>AMO</a>.
You need to download the XPI from: http://www.softwareishard.com/firecookie/archive/ 