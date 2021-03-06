function runTest()
{
    FBTest.sysout("cookies.test.issue38; START");

    FBTestFirebug.openNewTab(basePath + "issue38/issue38.php", function(win)
    {
        FBTestFireCookie.enableCookiePanel(function(win)
        {
            var panelNode = FBTestFirebug.selectPanel("cookies").panelNode;
            var cookie = FBTestFireCookie.getCookieByName(panelNode, "TestCookie38");

            // TODO xxxHonza

            editCookie(cookie);

            FBTestFirebug.testDone("cookies.test.issue38; DONE");
        });
    });
};

function editCookie(cookie)
{
    FBTest.ok(cookie, "Cookie must exist.");
    if (!cookie)
        return;

    // TODO xxxHonza

    // Open editCookie.xul dialog and edit the value.
    FBTest.sysout("cookies.test.issue38; let's edit an existing cookie");
    return FBTestFireCookie.editCookie(cookie, function(dialog) {

        // TODO
        dialog.EditCookie.onOK();
    });
}
