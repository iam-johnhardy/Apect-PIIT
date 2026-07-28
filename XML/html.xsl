    <xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

     <!-- Root template -->

   <xsl:template match = '/library'>
        <html>
            <body>
                <h2>Authors</h2>
                
                <table>
                    <tr>
                        <th>title</th>
                        <th>author</th>
                        <th>year</th>
                        <th>price</th>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
    </xsl:stylesheet>