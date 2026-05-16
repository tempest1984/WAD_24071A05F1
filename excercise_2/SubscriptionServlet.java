import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SubscriptionServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Get plan
        String plan = request.getParameter("plan");

        String amount = "0.00";

        if(plan.equals("Basic")){
            amount = "299.00";
        }else if(plan.equals("Premium")){
            amount = "599.00";
        }else if(plan.equals("Pro")){
            amount = "899.00";
        }else if(plan.equals("ProPlus")){
            amount = "1299.00";
        }

        // Output
        out.println("<html><body>");
        //out.println("<h2>amount</h2>");
        out.println("<p><h3>plan: " + plan + "</h3></p>");
        out.println("<h3>amount: " + amount + "</h3>");
        
        out.println("<footer style='position: fixed; bottom: 0; width: 100%; text-align: center; background-color: #f1f1f1; padding: 10px;'>");
        out.println("<p>&copy; 2026 subcription 24071A05F1. All rights reserved.</p>");
        out.println("</footer>");
        out.println("</body></html>");
    }
}