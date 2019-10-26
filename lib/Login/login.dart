import 'package:flutter/material.dart';
import 'package:season_chan/Login/components/login_form.dart';

class LoginPage extends StatelessWidget {

  Widget _seasonChanLogo() {
    return Container(
      height: 150,
      child: Image.asset('images/seasonchanlogo.png'),
    );
  }

  Widget _backgroundImage({Widget child}) {
    return Stack(
      children: <Widget>[
        Container(
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('images/saoalicization.jpg'),
                  fit: BoxFit.cover)),
        ),
        Container(
          color: Colors.black38,
        ),
        Container(child: child)
      ],
    );
  }

  Widget _footer() {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'Powered by',
            style: TextStyle(
              color: Colors.white, 
              fontWeight: FontWeight.bold,
              fontSize: 20
            ),
          ),
          Image.asset('images/anilist.png', height: 30,)
        ],
      )
    );
  }

  Widget _content() {
    return Stack(
      children: <Widget>[
        Scaffold(
            appBar: null,
            body: _backgroundImage(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  _seasonChanLogo(),
                  LoginForm(),
                  _footer()
                ],
              )
            )
          )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Season-Chan',
      theme: ThemeData(
        hintColor: Colors.white
      ),
      home: _content(),
    );
  }
}
