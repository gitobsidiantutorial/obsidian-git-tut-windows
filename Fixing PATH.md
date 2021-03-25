# Appendix: Fixing path
If your command line indicates that git is not a recognised command, you must configure your PATH.

check to see where your git was installed. If you didn't change the default settings, it should be installed in  `C:\Program Files\Git\bin` or `C:\Program Files (x86)\Git\bin`.

Press windows and search for PATH.

![](attachments/Pasted%20image%2020210325201407.png)

Select Edit the system environment variables, and then click Environment Variables.

![](attachments/Pasted%20image%2020210325201541.png)

Select path, and then click edit. Select new, and past `C:\Program Files\Git\bin` or `C:\Program Files (x86)\Git\bin`, depending on which folder exists.

Open a command line interface and check if PATH has been configured correctly by typing `git` and pressing enter. If so, continue following the steps in [the tutorial](README.md).