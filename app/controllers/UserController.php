<?php

class UserController extends \BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $users = User::all();

        return Response::json(array(
            'error' => false,
            'urls' => $users->toArray()
        ),
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $user = new User;
        $user->firstname = Request::input('firstname');
        $user->lastname = Request::input('lastname');
        $user->email = Request::input('email');

        $user->save();

        $from = \Config::get('app.email_from');
        $to = $user->email;

        Mailer::sendMail($from, $to, 'Welcome', 'Welcome to the project!');

        return Response::json(array(
            'error' => false,
            'user' => $user->toArray()
        ),
            200
        );
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return Response::json(array(
            'error' => false,
            'urls' => $user->toArray()
        ),
            200
        );
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update($id)
    {
        $user = User::find($id);
        $user->firstname = Request::input('firstname');
        $user->lastname = Request::input('lastname');
        $user->email = Request::input('email');
        $user->save();

        return Response::json(array(
            'error' => false,
            'urls' => $user->toArray()
        ),
            200
        );
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return Response::json(array(
            'error' => false,
        ),
            200
        );
    }
}
