function runTest()
{
    FBTest.sysout("cookies.test.issue34; START");
    FBTest.loadScript("env.js", this);

    var baseRemotePath = "http://www.softwareishard.com/firecookie/tests/issue34/";
    FBTestFirebug.openNewTab(baseRemotePath + "issue34.php", function(win)
    {
        FBTestFireCookie.enableCookiePanel(function(win) 
        {
            var panelNode = FBTestFirebug.selectPanel("cookies").panelNode;
            var cookie1 = FBTestFireCookie.getCookieByName(panelNode, "TestCookie34-1");
            var cookie2 = FBTestFireCookie.getCookieByName(panelNode, "TestCookie34-2");

            editCookie(cookie1);
            editCookie(cookie2);

            FBTest.compare("ValueCookie34-modified", cookie1.cookie.value, "Check new cookie value");
            FBTest.compare("ValueCookie34-modified", cookie2.cookie.value, "Check new cookie value");
            FBTestFirebug.testDone("cookies.test.issue34; DONE");
        });
    });
};

function editCookie(cookie)
{
    FBTest.ok(cookie, "Cookie must exist.");
    if (!cookie)
        return;

    FBTest.sysout("cookies.test.issue34; this is our cookie", cookie);
    FBTest.compare(".softwareishard.com", cookie.cookie.host, "Check cookie host.");

    // Open editCookie.xul dialog and edit the value.
    FBTest.sysout("cookies.test.issue34; let's edit an existing cookie");
    return FBTestFireCookie.editCookie(cookie, function(dialog) {
        dialog.EditCookie.valueNode.value = cookie.cookie.value + "-modified";
        dialog.EditCookie.onOK();
    });
}